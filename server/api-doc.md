# covid19-cases-server

​
List of available endpoints:
​

- `POST /login`
  ​
- `GET /countries`
- `GET /reports`
- `POST /reports`
- `DELETE /reports/:id`
  ​
  ​
  ​
  Error response format:
  Status: 4xx or 5xx
  ​

```json
{
  "errors": ["...", "..."],
  "message": "..."
}
```

### POST /login

Request:

- data:

```json
{
  "username": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "token": "string",
  "id": "integer",
  "username": "string"
}
```

​

### GET /countries

Request:

- headers: token

Response:

- status: 200
- body:

```json
[
  {
    "name": "string",
    "cases": "integer",
    "deaths": "integer",
    "recovered": "integer"
  }
]
```

​

### GET /reports

description: get all current logged in user reports
​

Request:

- headers: - token: "string"

Response:

- status: 200
- body:
  ​

```json
[
  {
    "cases": "integer",
    "Country": ""
  }
]
```

​

### POST /reports

description: get all current logged in user reports
notes: ketika berhasil menambah reports, jumlah cases pada country yang dilaporkan ikut bertambah / terupdate
​

Request:

- headers:token: "string"
- data:

```json
{
  "cases": "integer",
  "CountryId": "integer"
}
```

​Response:

- status: 201
- body:
  ​

```json
{
  "report": {
    "id": "integer",
    "report": "integer",
    "UserId": "integer",
    "CountryId": "integer",
    "createdAt": "2020-03-17T12:00:56.894Z",
    "updatedAt": "2020-03-22T10:19:48.449Z",
    "Country": {
      "id": 89,
      "name": "Afghanistan",
      "deaths": 0,
      "recovered": 1,
      "cases": 20,
      "createdAt": "2020-03-17T12:00:56.894Z",
      "updatedAt": "2020-03-22T10:19:48.449Z"
    }
  }
}
```

​

### DELETE /reports/:id

notes: - ketika berhasil menghapus reports, jumlah cases pada country yang dilaporkan ikut berkurang / terupdate - Jangan lupa ada authentication dan authoritation pada endpoint ini
​

Request:

- headers: - token: "string"
- params: - id: "integer" required

Response:

- status: 200
- body:
  ​

```json
{
  "country": {
    "id": 42,
    "name": "Indonesia",
    "deaths": 5,
    "recovered": 8,
    "cases": 117,
    "createdAt": "2020-03-17T12:00:56.894Z",
    "updatedAt": "2020-03-22T10:19:18.590Z"
  },
  "report": "Successfully delete"
}
```
