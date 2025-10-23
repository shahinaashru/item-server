GitHub url : https://github.com/shahinaashru/item-server

http://127.0.0.1:3000/
Response : Inventory API is Running

http://127.0.0.1:3000/health
response : {
"status": "Server is healthy and running"
}

http://127.0.0.1:3000/items

method : post

body :
{
"name":"Soap",
"quantity":10,
"price":50
}
response:
{
"name":"Soap",
"quantity":10,
"price":50
}

http://127.0.0.1:3000/items
method : get
response:
{
"message": "Item retrieved successfully",
"items": [
{
"_id": "68f9d1c9e7e4a515fb08bc13",
"name": "Pen",
"quantity": 10,
"price": 5
},
{
"_id": "68f9d210c3176f7598227e95",
"name": "Soap",
"quantity": 10,
"price": 50,
"__v": 0
}
]
}

error : http://127.0.0.1:3000/error

response : {
"message": "Route Not Found"
}

log :
