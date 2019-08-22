# Books api

Spins up a preloaded books api with prices for all the books used on the Oncase Campus course PDI1000.

## Quick Start

```bash
docker-compose build
docker-compose up
```
## Usage

`http://localhost:3000/book/:bookId`

Example return:

```json
    {"price":40,"_id":70}
```