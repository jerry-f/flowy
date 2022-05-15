#步骤 steps 可自定义， 也可使用第三方

## 1. 直接使用 uses 第三方
- uses actions/checkout@v2

## 2. 使用 name 和 uses 第三方
- name:  Use Node.js
 uses: actions/setup-node@v1
 with:
    node-version:14

## 3. 使用 name 和 run
- name： lint and test
  run: |
    npm i
    npm run lint
    npm run test

## 4. 直接使用 run
- run： npm i
- run: npm run lint
- run: npm run test

## just test abc
