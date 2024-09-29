<!-- ## Implemented and Tested Routes

Here is a list of the routes that have been implemented and tested:

### Products

- **GET /products**
  - Fetches all products from the Grocery Store API.
  - Example response:
    ```json
    {
      "message": "Data successfully sent via Axios",
      "data": [
        {
          "id": 4643,
          "category": "coffee",
          "name": "Starbucks Coffee Variety Pack, 100% Arabica",
          "inStock": true
        },
        // Additional products...
      ]
    }
    ```

- **GET /products/:id**
  - Fetches a specific product based on the provided ID.
  - Example usage:
    ```
    GET /products/4643
    ```
  - Example response:
    ```json
    {
      "message": "Successfully fetched product data",
      "data": {
        "id": 4643,
        "category": "coffee",
        "name": "Starbucks Coffee Variety Pack, 100% Arabica",
        "inStock": true
      }
    }
    ```

### Carts

- **POST /carts**
  - Creates a new cart.
  - Example usage:
    ```
    POST /carts
    ```
  - Example response:
    ```json
    {
      "created": true,
      "cartId": "abc123"
    }
    ```

- **GET /carts**
  - Fetches all created carts.
  - Example response:
    ```json
    {
      "message": "Available carts:",
      "carts": ["abc123", "xyz789"]
    }
    ```

- **POST /carts/:cartId/items**
  - Adds an item to the cart based on the provided `cartId`.
  - Example usage:
    ```
    POST /carts/abc123/items
    Body: { "productId": 4643, "quantity": 2 }
    ```
  - Example response:
    ```json
    {
      "message": "Item successfully added to the cart",
      "cartId": "abc123",
      "item": {
        "productId": 4643,
        "quantity": 2
      }
    }
    ``` -->
