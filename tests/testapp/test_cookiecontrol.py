import types

from django import test
from django.core.exceptions import ValidationError
from django.template import Context, Template
from django.test.utils import override_settings

from feincms3_cookiecontrol.checks import check_settings
from feincms3_cookiecontrol.models import CookieCategory, CookieScript


# from .models import Model
# from django.utils.functional import lazy


class CookieControlTest(test.TestCase):
    def test_panel_setup_defaults_provided(self):
        t = Template(
            """
            {% load feincms3_cookiecontrol %}
            {% feincms3_cookiecontrol_panel page %}
            """
        )

        with self.assertNumQueries(1):  # No categories, no scripts to prefetch
            html = t.render(
                Context(
                    {
                        "page": types.SimpleNamespace(id=-1),
                    }
                )
            )
            # print(html)

        self.assertIn('id="f3cc-data"', html)

    def test_correct_setup_for_active_language(self):
        pass

    @override_settings(MIGRATION_MODULES={})
    def test_missing_migration_modules(self):
        errors = check_settings(None)
        self.assertEqual(
            [error.id for error in errors],
            ["feincms3_cookiecontrol.E001"],
        )

    def test_erroneous_scripts(self):
        category = CookieCategory.objects.create()

        # No exception
        CookieScript(
            category=category,
            name="script-name",
            inject_if="",
            inject_else="",
        ).full_clean()

        with self.assertRaises(ValidationError) as cm:
            CookieScript(
                category=category,
                name="script-name",
                inject_if="function(){}",
                inject_else="function(){}",
            ).full_clean()

        self.assertEqual(
            [m.message for m in cm.exception.error_dict["inject_if"]],
            [
                "This doesn't look right. Please start with a HTML tag"
                " (e.g. <script>, <div>)."
            ],
        )
        self.assertEqual(
            [m.message for m in cm.exception.error_dict["inject_else"]],
            [
                "This doesn't look right. Please start with a HTML tag"
                " (e.g. <script>, <div>)."
            ],
        )
