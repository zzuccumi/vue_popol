# vue project common boilerplate (ver 0.1)

## ● Set up
1. GIT Clone
```bash 
$ mkdir {project name}
```
2. install packages
```bash 
$ cd {project name}
$ npm install
```
3. run local server
```bash 
$ npm run serve
```

## ● Environment
- vue 2
- vue-cli 3

## ● Structure

- assets : fonts, icons, images, styles 등 자산파일(assets files)
- components : vue components 개발
- config : 설정 파일 관리
- constants : 상수 관리
- directives : vue custom directive 등록
- layouts : 화면별 layout 개발
- plugins : vuetify 등 내,외부 플러그인 등록
- router : vue router 등록
- services : axios 등 외부 연동 서비스 관리
- store : vuex store 데이터 관리
- utils : 유틸 function 등록
- views : vue router로 진입되는 화면 등록
- tests : test 코드 관리
- package.json : node package 관리
- vue.config.js : vue 전역 설정 관리


## ● Application architecture
1. 중간 규모의 vue 애플리케이션에 적합한 기본 구조로 구성
2. 애플리케이션 규모, 도메인 특성에 맞춰 구조 변경 필요
3. 더 복잡하고 큰 규모의 애플리케이션일 경우 common 디렉토리로 공통 기능 묶어서 관리 및 도메인별 폴더 생성하여 구조 관리 필요

