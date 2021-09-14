from django import template
from django.core.cache import cache
from django.utils.translation import gettext_lazy as _

from feincms3_cookiecontrol.models import CookieCategory, CookieScript


register = template.Library()


COOKIECONTROL_PANEL_DEFAULTS = {
    "panel": {
        "heading": _("Your Cookie Settings Protect Your Privacy"),
        "content": _("Panel content"),
        "buttonSave": _("Save settings"),
        "buttonCancel": _("Cancel"),
    },
    "banner": {
        "heading": _("Cookies on Our Website"),
        "content": _("Banner content"),
        "buttonAccept": _("Accept all"),
        "buttonPanel": _("Modify settings"),
    },
    "revoke": {
        "buttonPanel": _("Modify/revoke cookie settings"),
    },
    "legalPage": None,
}

DEFAULT_PANEL_CACHE_TIMEOUT = 60 * 60 * 24


@register.inclusion_tag("feincms3_cookiecontrol/panel.html")
def feincms3_cookiecontrol_panel(page):
    # cache is page specific bc of ancestor configuration
    CACHE_KEY = f"feincms3_cookiecontrol_settings_{page.id}"

    panel = cache.get(CACHE_KEY)
    if not panel:
        panel = {
            **COOKIECONTROL_PANEL_DEFAULTS,
            "categories": {t.name: t.serialize() for t in CookieCategory.objects.all()},
            "cookies": {t.name: t.serialize() for t in CookieScript.objects.all()},
        }

        # inherit configuration from page ancestors
        for p in [page] + list(page.ancestors().reverse()):
            panel.update(
                **p.cookiecontrol_dict() if hasattr(p, "cookiecontrol_dict") else None
            )

        cache.set(CACHE_KEY, panel, timeout=DEFAULT_PANEL_CACHE_TIMEOUT)

    """
    only show revoke button on legal_page
    """
    if panel["legalPage"] and not (page.id == panel["legalPage"]):
        panel.pop("revoke")

    panel.pop("legalPage")

    return {"panel": panel}
