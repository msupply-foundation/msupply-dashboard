# [Grafana](https://grafana.com) [![Circle CI](https://circleci.com/gh/grafana/grafana.svg?style=svg)](https://circleci.com/gh/grafana/grafana) [![Go Report Card](https://goreportcard.com/badge/github.com/grafana/grafana)](https://goreportcard.com/report/github.com/grafana/grafana) [![codecov](https://codecov.io/gh/grafana/grafana/branch/master/graph/badge.svg)](https://codecov.io/gh/grafana/grafana)

[Website](https://grafana.com) |
[Twitter](https://twitter.com/grafana) |
[Community & Forum](https://community.grafana.com)

Grafana is an open source, feature rich metrics dashboard and graph editor for
Graphite, Elasticsearch, OpenTSDB, Prometheus and InfluxDB.

![](http://docs.grafana.org/assets/img/features/dashboard_ex1.png)

### Modifications

A couple of tweaks have been made to the grafana core. To apply the changes:

- obtain the latest code, copy the folders in this project over the existing codebase. This adds the new binary (image) files.
- apply the patch: `git apply changes.patch`

### Dependencies

- Go (Latest Stable)
- NodeJS LTS

### Building the backend

```bash
go get github.com/grafana/grafana
cd $GOPATH/src/github.com/grafana/grafana
go run build.go setup
go run build.go build
```

### Building frontend assets

For this you need nodejs (v.6+).

To build the assets, rebuild on file change, and serve them by Grafana's webserver (http://localhost:3000):

```bash
npm install -g yarn
yarn install --pure-lockfile
yarn watch
```

Build the assets, rebuild on file change with Hot Module Replacement (HMR), and serve them by webpack-dev-server (http://localhost:3333):

```bash
yarn start
# OR set a theme
env GRAFANA_THEME=light yarn start
```

Note: HMR for Angular is not supported. If you edit files in the Angular part of the app, the whole page will reload.

Run tests

```bash
yarn jest
```

### Recompile backend on source change

To rebuild on source change.

```bash
go get github.com/Unknwon/bra
bra run
```

#### Building on linux/amd64 (fast)

1. Build the frontend `go run build.go build-frontend`
2. Build the docker image `make build-docker-dev`

The resulting image will be tagged as `grafana/grafana:dev`

#### Building anywhere (slower)

Choose this option to build on platforms other than linux/amd64 and/or not have to setup the Grafana development environment.

1. `make build-docker-full` or `docker build -t grafana/grafana:dev .`

The resulting image will be tagged as `grafana/grafana:dev`

## License

Grafana is distributed under [Apache 2.0 License](https://github.com/grafana/grafana/blob/master/LICENSE.md).
