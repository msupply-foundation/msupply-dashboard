# mSupply Dashboard: Grafana with the mSupply plugins, the default dashboards and the tools
# to install, check and migrate an installation. Built by build.sh from a msupply-dashboard
# checkout; the build context is assembled there, not taken from the repo as it is.
ARG GRAFANA_VERSION=13.2.2
FROM grafana/grafana:${GRAFANA_VERSION}

ARG SOURCE_COMMIT=unknown
ARG SOURCE_BRANCH=unknown
LABEL org.opencontainers.image.title="mSupply Dashboard" \
      org.opencontainers.image.source="https://github.com/msupply-foundation/msupply-dashboard" \
      org.opencontainers.image.revision="${SOURCE_COMMIT}" \
      org.msupply.dashboard.branch="${SOURCE_BRANCH}"

USER root
# psql for init-db and update-grafanadb; python3 (with sqlite3) for the grafana.db tools.
RUN apk add --no-cache postgresql17-client python3 \
 && python3 -c "import sqlite3"

COPY plugins/ /usr/share/msupply/plugins/
COPY seed/grafana.db /usr/share/msupply/seed/grafana.db
COPY db/ /usr/share/msupply/db/
COPY lib/ /usr/share/msupply/lib/
COPY provisioning/datasources/ /etc/grafana/provisioning/datasources/
COPY bin/ /usr/local/bin/
RUN chmod 755 /usr/local/bin/msupply /usr/local/bin/msupply-entrypoint \
 && chmod -R a+rX /usr/share/msupply /etc/grafana/provisioning \
 && printf '%s %s\n' "${SOURCE_BRANCH}" "${SOURCE_COMMIT}" > /usr/share/msupply/SOURCE

# "console file": docker compose logs shows the log, and msupply check reads the file.
# Plugins live in the data volume (data/plugins), so plugins installed from the Grafana screen survive an
# update. The mSupply plugins ship in /usr/share/msupply/plugins and the entrypoint copies them there.
ENV GF_LOG_MODE="console file" \
    GF_PATHS_PLUGINS=/var/lib/grafana/plugins \
    GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=msupplyfoundation-table,msupplyfoundation-msupply-regionmap \
    GF_PLUGINS_PREINSTALL_DISABLED=true \
    GF_AUTH_GENERIC_OAUTH_NAME=OAuth \
    GF_AUTH_GENERIC_OAUTH_ICON=signin \
    GF_AUTH_GENERIC_OAUTH_ALLOW_SIGN_UP=true \
    GF_AUTH_GENERIC_OAUTH_SCOPES="user:email,read:org"

USER 472
ENTRYPOINT ["/usr/local/bin/msupply-entrypoint"]
