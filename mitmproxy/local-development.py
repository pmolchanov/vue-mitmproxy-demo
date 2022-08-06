from mitmproxy import ctx
import re

"""
mitmproxy addon for local development. See:
    https://github.com/mitmproxy/mitmproxy/tree/main/mitmproxy/addons
"""

class LocalDevelopment:
    def __init__(self):
        ctx.log.info("LocalDevelopment addon initialized")

    def request(self, flow):
        if flow.response or flow.error or not flow.live:
            return

        if re.search("^example.com$", flow.request.host, re.IGNORECASE) and flow.request.path.startswith("/my/sub/path/"):
            flow.request.scheme = "http"
            flow.request.host = "localhost"
            flow.request.port = 8082

addons = [LocalDevelopment()]