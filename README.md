```[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
    example:
    echo ": some message" # fails
    echo "fix: some message" # passes
```

1. Open _Commit_ in webstorm shortcut` Commend + K`
2. Local node server -> **json-sever**

   - easy to configure `json-server` can start a `REST API Server` within 30 seconds
   - easy to customize
   - simulate the real CRUD

3. ### REST API
   - `GET /tickets (list)`
   - `GET /tickets/12 (details)`
   - `POST /tickets (add)`
   - `PUT /tickets/12 (replace)`
   - `PATCH /tickets/12 (modify)`
   - `DELETE /tickets/12 (delete)`
4. Start json-server: `json-server --wwatch db.json`
5. decodeURIComponent vs encodeURI
6. `.env` VS. `.env.development`
   - when we run `yarn start (npm start)` webpack will read the variable in the `.env.developement`, when
     run `yarn build (npm run build)` webpack will read `.env`
7. **Optional Chaining Operator**: `object?.name`
8. `useDebounce()` prevent multiple rendering
9. Learned `Ant Design`
10. Learned [craco](https://github.com/gsoft-inc/craco)
