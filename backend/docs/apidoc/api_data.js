define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/apidoc/main.js",
    "group": "/Users/minhkhang/apidoc/docs/apidoc/main.js",
    "groupTitle": "/Users/minhkhang/apidoc/docs/apidoc/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "User request creating new account",
    "version": "1.0.0",
    "name": "authRegister",
    "group": "Auth",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/auth/register"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ten nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>So CMND cua nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ cua nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>So dien thoai cua nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email cua nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mat khau cua nguoi su dung</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Nguyen Van Loi\",\n  \"personalId\":\"384736273\",\n  \"address\": \"Ninh Kieu, Can Tho\",\n  \"phone\": \"093827463\",\n  \"email\": \"admin@gmail.com\",\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ten nguoi su dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>So CMND cua nguoi su dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>So dien thoai cua nguoi su dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email cua nguoi su dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Thoi gian nguoi dung duoc tao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID cua nguoi su dung</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"name\": \"Nguyen Quang Khai\",\n    \"avatar\": \"http://localhost:3003/image-1576222546040.png\",\n    \"personalId\": \"381823821\",\n    \"address\": \"14/132, 3/2 street, Ninh Kieu, Can Tho\",\n    \"email\": \"vanloi10c@gmail.com\",\n    \"user\": \"user\",\n    \"HTXId\": \"115\",\n    \"created\": \"2019-11-12T12:13:24.216Z\",\n    \"_id\": \"5dcaa1e4e363dc1df58f0317\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Name-is-required",
            "description": "<p>Thieu truong ten nguoi dung</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Personal-id-is-invalid",
            "description": "<p>So CMND sai</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Phone-number-already-exist",
            "description": "<p>Nguoi dung da ton tai trong CSDL</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Phone-number-is-reqired",
            "description": "<p>Thieu SDT</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Passsword-is-required-and-more-than-3-characters",
            "description": "<p>Khong co ma khau hoac mat khau qua ngan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Phone number already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/borrowedTools",
    "title": "Create new document for logging when tool was borrowed by someone",
    "name": "CreateNewBorrowedTool",
    "group": "BorrowedTools",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/borrowedTools",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "toolId",
            "description": "<p>Id công cụ, dụng cụ cần mượn</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "borrowedQuantity",
            "description": "<p>Số lượng mượn</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "borrowedDate",
            "description": "<p>Ngày mượn (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userBorrowedId",
            "description": "<p>Id người mượn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"toolId\": \"5e76f16b1dcd9d3dcb2dca0a\",\n    \"borrowedQuantity\": \"99\",\n    \"borrowedDate\": \"2020-09-09\",\n    \"userBorrowedId\": \"5dc7da01b47cf4369b24d8f6\",\n    \"image\": file,\n    \"note\": \"something\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "toolId",
            "description": "<p>Id công cụ, dụng cụ cần mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "borrowedQuantity",
            "description": "<p>Số lượng mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "borrowedDate",
            "description": "<p>Ngày mượn (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "returnedDate",
            "description": "<p>Ngày trả (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "userBorrowedId",
            "description": "<p>Id người mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>cooperativeId Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n\n{\n    \"toolId\": \"5e76f16b1dcd9d3dcb2dca0a\",\n    \"borrowedQuantity\": \"99\",\n    \"borrowedDate\": \"2020-09-09\",\n    \"returnedDate\": null\n    \"userBorrowedId\": \"5dc7da01b47cf4369b24d8f6\",\n    \"note\": \"something\"\n    \"image\": \"http://localhost:3001/tool/image-1584776076120.jpeg\",\n    \"cooperativeId\": \"HTXUMH3\",\n    \"_id\": \"5e75c38c40019a40362038ff\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "toolId-is-required",
            "description": "<p>Trường id dụng cụ là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userBorrowedId-is-required",
            "description": "<p>Trường id người mượn là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "borrowedQuantity-is-required",
            "description": "<p>Số lượng mượn là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "borrowedDate-is-required",
            "description": "<p>Ngày mượn là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "borrowedQuantity-is-greater-than-available",
            "description": "<p>Số lượng mượn lớn hơn số lượng hiện tạic</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "user-doesnt-exist",
            "description": "<p>Người mượn không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "borrowedQuantity-must-be-positive-number:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Số lượng phải là số nguyên dương lớn hơn 0\"\n}",
          "type": "json"
        },
        {
          "title": "userBorrowedId is required:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Vui lòng nhập id người mượn\"\n}",
          "type": "json"
        },
        {
          "title": "user does not exist:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Người mượn không tồn tại\"\n}",
          "type": "json"
        },
        {
          "title": "borrowed quantity is greater than avaiable:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Số lượng mượn lớn hơn số lượng hiện tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/borrowedTool.router.js",
    "groupTitle": "BorrowedTools"
  },
  {
    "type": "delete",
    "url": "/borrowedTools/:id",
    "title": "Delete document borrowed tool",
    "name": "DeleteBorrowedTool",
    "group": "BorrowedTools",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/borrowedTools/5e09757502716412c0b026d7",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"successMessage\": \"Document được xóa thành công\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Tool-not-found",
            "description": "<p>Document không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Document not found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"Document không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/borrowedTool.router.js",
    "groupTitle": "BorrowedTools"
  },
  {
    "type": "get",
    "url": "/api/borrowedTools",
    "title": "Get all borrowed tools document",
    "name": "GetAllBorrowedTools",
    "group": "BorrowedTools",
    "examples": [
      {
        "title": "Get all borrowed tools with paginating:",
        "content": "curl -i http://localhost:3001/api/borrowedTools?pageNumber=1&nPerPage=20",
        "type": "curl"
      },
      {
        "title": "Get All Tools Management with paginating and specific fields:",
        "content": "curl -i http://localhost:3001/api/borrowedTools?pageNumber=1&nPerPage=20&cooperativeId=HTXUMH3",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Số thứ tự trang cần lấy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nPerPage",
            "description": "<p>Số lượng sản phẩm trên mỗi trang</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "toolName",
            "description": "<p>Tên công cụ, dụng cụ đã mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "borrowedQuantity",
            "description": "<p>Số lượng mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "borrowedDate",
            "description": "<p>Ngày mượn (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "returnedDate",
            "description": "<p>Ngày trả (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "userBorrowedName",
            "description": "<p>Tên người mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>cooperativeId Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n\n{\n     \"totalTools\": 2,\n     \"totalPages\": 1,\n     \"data\": [\n         {\n              \"_id\": \"5e7713bc31d4d0077efd283d\",\n              \"borrowedQuantity\": \"2\",\n              \"borrowedDate\": \"2020-09-09\",\n              \"returnedDate\": null,\n              \"image\": null,\n              \"note\": null,\n              \"cooperativeId\": \"fsdjfe\",\n              \"toolName\": \"Dụng cụ y tế\",\n              \"userBorrowedName\": \"Nguyen Van Loi\"\n          },\n          {\n              \"_id\": \"5e7715917d317a09e95f2cbd\",\n              \"borrowedQuantity\": \"19\",\n              \"borrowedDate\": \"2020-09-09\",\n              \"returnedDate\": null,\n              \"image\": null,\n              \"note\": null,\n              \"cooperativeId\": \"fsdjfe\",\n              \"toolName\": \"Bao lúa\",\n              \"userBorrowedName\": \"Nguyen Van Loi\"\n          }\n          ...\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Page-not-found",
            "description": "<p>Trang không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Page not found:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"errorMessage\": \"Trang tìm kiếm không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/borrowedTool.router.js",
    "groupTitle": "BorrowedTools"
  },
  {
    "type": "get",
    "url": "/api/borrowedTools/:id",
    "title": "Get borrowed tool document",
    "name": "GetBorrowedTool",
    "group": "BorrowedTools",
    "examples": [
      {
        "title": "Get borrowed tool:",
        "content": "curl -i http://localhost:3001/api/borrowedTools/5e7713bc31d4d0077efd283d",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "toolName",
            "description": "<p>Tên công cụ, dụng cụ đã mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "borrowedQuantity",
            "description": "<p>Số lượng mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "borrowedDate",
            "description": "<p>Ngày mượn (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "returnedDate",
            "description": "<p>Ngày trả (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "userBorrowedName",
            "description": "<p>Tên người mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>cooperativeId Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n\n{\n     {\n          \"_id\": \"5e7713bc31d4d0077efd283d\",\n          \"borrowedQuantity\": \"2\",\n          \"borrowedDate\": \"2020-09-09\",\n          \"returnedDate\": null,\n          \"image\": null,\n          \"note\": null,\n          \"cooperativeId\": \"fsdjfe\",\n          \"toolName\": \"Dụng cụ y tế\",\n          \"userBorrowedName\": \"Nguyen Van Loi\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Page-not-found",
            "description": "<p>Trang không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Document not found:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"errorMessage\": \"Document không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/borrowedTool.router.js",
    "groupTitle": "BorrowedTools"
  },
  {
    "type": "post",
    "url": "/api/borrowedTools/:id/return",
    "title": "Return borrowed tool",
    "name": "ReturnBorrowedTool",
    "group": "BorrowedTools",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/borrowedTools/5e7713bc31d4d0077efd283d/return",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "returnedDate",
            "description": "<p>Ngày trả (chuẩn ISO 8601)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"returnedDate\": \"2022-01-01\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "toolId",
            "description": "<p>Id công cụ, dụng cụ cần mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "borrowedQuantity",
            "description": "<p>Số lượng mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "borrowedDate",
            "description": "<p>Ngày mượn (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "returnedDate",
            "description": "<p>Ngày trả (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "userBorrowedId",
            "description": "<p>Id người mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>cooperativeId Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"toolId\": \"5e76f16b1dcd9d3dcb2dca0a\",\n    \"borrowedQuantity\": \"99\",\n    \"borrowedDate\": \"2020-09-09\",\n    \"returnedDate\": \"2022-01-01\",\n    \"userBorrowedId\": \"5dc7da01b47cf4369b24d8f6\",\n    \"note\": \"something\"\n    \"image\": \"http://localhost:3001/tool/image-1584776076120.jpeg\",\n    \"cooperativeId\": \"HTXNN\",\n    \"_id\": \"5e75c38c40019a40362038ff\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "returnedDate-is-invalid",
            "description": "<p>Định dạng ngày trả không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "returnedDate-is-less-than-borrowedDate",
            "description": "<p>Ngày trả không thể nhỏ hơn ngày đã mượn</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "tool-already-return",
            "description": "<p>Dụng cụ đã được trả</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "returnedDate less than borrowedDate:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Ngày trả không thể nhỏ hơn ngày mượn.\"\n}",
          "type": "json"
        },
        {
          "title": "tool already return:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Dụng cụ đã được trả. Sử dụng update nếu muốn cập nhật ngày trả\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/borrowedTool.router.js",
    "groupTitle": "BorrowedTools"
  },
  {
    "type": "patch",
    "url": "/api/borrowedTools/:id",
    "title": "Update borrowed tool document",
    "name": "UpdateBorrowedTool",
    "group": "BorrowedTools",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/borrowedTools/5e7713bc31d4d0077efd283d",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "toolId",
            "description": "<p>Id công cụ, dụng cụ cần mượn</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "borrowedQuantity",
            "description": "<p>Số lượng mượn</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "borrowedDate",
            "description": "<p>Ngày mượn (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "returnedDate",
            "description": "<p>Ngày trả (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userBorrowedId",
            "description": "<p>Id người mượn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"toolId\": \"5e76f16b1dcd9d3dcb2dca0a\",\n    \"borrowedQuantity\": \"999\",\n    \"borrowedDate\": \"2020-09-09\",\n    \"returnedDate\": \"2022-01-01\",\n    \"userBorrowedId\": \"5dc7da01b47cf4369b24d8f6\",\n    \"cooperativeId\": \"HTXNN\",\n    \"image\": file,\n    \"note\": \"update\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "toolId",
            "description": "<p>Id công cụ, dụng cụ cần mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "borrowedQuantity",
            "description": "<p>Số lượng mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "borrowedDate",
            "description": "<p>Ngày mượn (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "returnedDate",
            "description": "<p>Ngày trả (chuẩn ISO 8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "userBorrowedId",
            "description": "<p>Id người mượn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>cooperativeId Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"toolId\": \"5e76f16b1dcd9d3dcb2dca0a\",\n    \"borrowedQuantity\": \"99\",\n    \"borrowedDate\": \"2020-09-09\",\n    \"returnedDate\": \"2022-01-01\",\n    \"userBorrowedId\": \"5dc7da01b47cf4369b24d8f6\",\n    \"note\": \"update\"\n    \"image\": \"http://localhost:3001/tool/image-1584776076120.jpeg\",\n    \"cooperativeId\": \"HTXNN\",\n    \"_id\": \"5e75c38c40019a40362038ff\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "toolId-doesnt-exist",
            "description": "<p>Dụng cụ không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "borrowedDate-is-invalid",
            "description": "<p>Định dạng ngày mượn không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "returnedDate-is-invalid",
            "description": "<p>Định dạng ngày trả không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "returnedDate-is-less-than-borrowedDate",
            "description": "<p>Ngày trả không thể nhỏ hơn ngày đã mượn</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "borrowedQuantity-is-greater-than-available",
            "description": "<p>Số lượng mượn không thể lớn hơn số lượng hiện có</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "borrowedQuantity-must-be-positive-integer",
            "description": "<p>Số lượng mượn phải là số nguyên dương khác 0</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "user-doesnt-exist",
            "description": "<p>Người mượn không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "borrowedQuantity-must-be-positive-number:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Số lượng phải là số nguyên dương lớn hơn 0\"\n}",
          "type": "json"
        },
        {
          "title": "returnedDate less than borrowedDate:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Ngày trả không thể nhỏ hơn ngày mượn.\"\n}",
          "type": "json"
        },
        {
          "title": "user does not exist:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Người mượn không tồn tại\"\n}",
          "type": "json"
        },
        {
          "title": "borrowed quantity is greater than avaiable:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Số lượng mượn lớn hơn số lượng hiện tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/borrowedTool.router.js",
    "groupTitle": "BorrowedTools"
  },
  {
    "type": "delete",
    "url": "/api/cooperatives",
    "title": "Xóa thông tin của HTX.",
    "version": "1.0.0",
    "name": "DeleteCooperatives",
    "group": "Cooperatives",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của HTX trong CSDL (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "foreignName",
            "description": "<p>Tên nước ngoài của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "abbreviationName",
            "description": "<p>Tên viết tắt của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Logo của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Tình trạng họat động của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "cooperativeID",
            "description": "<p>Mã số của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "tax",
            "description": "<p>Mã số thuế của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "surrgate",
            "description": "<p>Người đại diện của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>Giám đốc của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>Số fax của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Địa chỉ website của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "representOffice",
            "description": "<p>Địa chỉ văn phòng đại diện của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String[]",
            "optional": false,
            "field": "docs",
            "description": "<p>Danh sách file liên quan của HTX (tùy chọn).</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/cooperatives?_id=5df306ee040d111f9b9e56bf"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "successMessage",
            "description": "<p>Thông báo đã xóa thành công dữ liệu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"responseMessage\": \"Xóa thành công: 1 dữ liệu\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Du-lieu-khong-ton-tai",
            "description": "<p>Dữ liệu không tồn tại.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Tac-vu-eyu-cau-phai-co-dieu-kien",
            "description": "<p>Tác vụ yêu cầu phải có điều kiện.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n     \"error\": \"Dữ liệu không tồn tại\"\n }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Cooperatives"
  },
  {
    "type": "get",
    "url": "/api/cooperatives/all",
    "title": "Get thông tin HTX.",
    "version": "1.0.0",
    "name": "GetAllCooperatives",
    "group": "Cooperatives",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/cooperatives/all"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Fileds": [
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records._id",
            "description": "<p>ID cua Hop tac xa.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.name",
            "description": "<p>Tên gọi của hợp tác xã.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.foreignName",
            "description": "<p>Tên nước ngoài của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.abbreviationName",
            "description": "<p>Tên viết tắt.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.logo",
            "description": "<p>Logo của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.status",
            "description": "<p>Thông tin trạng thái của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.cooperativeID",
            "description": "<p>Mã số HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.tax",
            "description": "<p>Mã số thuế của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.surrgate",
            "description": "<p>Người đại diện.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.director",
            "description": "<p>Giám đốc.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.address",
            "description": "<p>Địa chỉ của hợp tác xã.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.phone",
            "description": "<p>Số điện thoại của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.fax",
            "description": "<p>Địa chỉ fax của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.website",
            "description": "<p>Đia chỉ website của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.representOffice",
            "description": "<p>Văn phòng đại diện.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String[]",
            "optional": false,
            "field": "records.docs",
            "description": "<p>Danh sách tài liệu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\n        {\n            \"_id\": \"5de653f18a92cd1e06fc0b59\",\n            \"name\": \"Hop tac xa nga nam\",\n            \"foreignName\": \"Hop tac xa nga nam\",\n            \"abbreviationName\": \"NN\",\n            \"logo\": \"\",\n            \"status\": \"Dang hoat dong\",\n            \"cooperativeID\": \"HTXNN\",\n            \"tax\": \"NN23442\",\n            \"surrgate\": \"Nguyen Tan Vu\",\n            \"director\": \"Huynh Van Tan\",\n            \"address\": \"\",\n            \"phone\": \"0836738223\",\n            \"fax\": \"NN341\",\n            \"website\": \"nn.com\",\n            \"representOffice\": \"\",\n            \"docs\": \"\"\n        }\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Loi-Trong-qua-trinh-tim-kiem",
            "description": "<p>Lỗi trong quá trình tìm kiếm.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ID-khong-hop-le",
            "description": "<p>ID không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"ID không hợp lệ\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Cooperatives"
  },
  {
    "type": "get",
    "url": "/api/cooperatives",
    "title": "Get du lieu HTX theo phan trang.",
    "version": "1.0.0",
    "name": "GetCooperatives",
    "group": "Cooperatives",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/cooperatives?pageNumber=1&resultNumber=1"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resultNumber",
            "description": "<p>so luong ket qua tra ve theo phan trang (tuy chon).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>trang du lieu can tra ve theo phan trang (tuy chon).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Fileds": [
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records._id",
            "description": "<p>ID cua Hop tac xa.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.name",
            "description": "<p>Tên gọi của hợp tác xã.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.foreignName",
            "description": "<p>Tên nước ngoài của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.abbreviationName",
            "description": "<p>Tên viết tắt.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.logo",
            "description": "<p>Logo của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.status",
            "description": "<p>Thông tin trạng thái của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.cooperativeID",
            "description": "<p>Mã số HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.tax",
            "description": "<p>Mã số thuế của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.surrgate",
            "description": "<p>Người đại diện.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.director",
            "description": "<p>Giám đốc.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.address",
            "description": "<p>Địa chỉ của hợp tác xã.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.phone",
            "description": "<p>Số điện thoại của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.fax",
            "description": "<p>Địa chỉ fax của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.website",
            "description": "<p>Đia chỉ website của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.representOffice",
            "description": "<p>Văn phòng đại diện.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String[]",
            "optional": false,
            "field": "records.docs",
            "description": "<p>Danh sách tài liệu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\n        {\n            \"_id\": \"5de653f18a92cd1e06fc0b59\",\n            \"name\": \"Hop tac xa nga nam\",\n            \"foreignName\": \"Hop tac xa nga nam\",\n            \"abbreviationName\": \"NN\",\n            \"logo\": \"\",\n            \"status\": \"Dang hoat dong\",\n            \"cooperativeID\": \"HTXNN\",\n            \"tax\": \"NN23442\",\n            \"surrgate\": \"Nguyen Tan Vu\",\n            \"director\": \"Huynh Van Tan\",\n            \"address\": \"\",\n            \"phone\": \"0836738223\",\n            \"fax\": \"NN341\",\n            \"website\": \"nn.com\",\n            \"representOffice\": \"\",\n            \"docs\": \"\"\n        }\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Loi-Trong-qua-trinh-tim-kiem",
            "description": "<p>Lỗi trong quá trình tìm kiếm.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ID-khong-hop-le",
            "description": "<p>ID không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"ID không hợp lệ\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Cooperatives"
  },
  {
    "type": "get",
    "url": "/api/cooperatives/count",
    "title": "Get tổng số HTX đang quản lí",
    "version": "1.0.0",
    "name": "GetCooperatives",
    "group": "Cooperatives",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/cooperatives/count"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Tổng số HTX đang quản lí.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"total\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"errorMessage\": \"Lỗi trong quá trình truy xuất dữ liệu\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Cooperatives"
  },
  {
    "type": "patch",
    "url": "/api/cooperatives",
    "title": "Cập nhật thông tin của HTX.",
    "version": "1.0.0",
    "name": "PatchCooperatives",
    "group": "Cooperatives",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của HTX trong CSDL (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "foreignName",
            "description": "<p>Tên nước ngoài của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "abbreviationName",
            "description": "<p>Tên viết tắt của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Logo của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Tình trạng họat động của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "cooperativeID",
            "description": "<p>Mã số của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "tax",
            "description": "<p>Mã số thuế của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "surrgate",
            "description": "<p>Người đại diện của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>Giám đốc của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>Số fax của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Địa chỉ website của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "representOffice",
            "description": "<p>Địa chỉ văn phòng đại diện của HTX (tùy chọn).</p>"
          },
          {
            "group": "query",
            "type": "String[]",
            "optional": false,
            "field": "docs",
            "description": "<p>Danh sách file liên quan của HTX (tùy chọn).</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của HTX trong CSDL (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "foreignName",
            "description": "<p>Tên nước ngoài của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "abbreviationName",
            "description": "<p>Tên viết tắt của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Logo của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Tình trạng họat động của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "cooperativeID",
            "description": "<p>Mã số của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "tax",
            "description": "<p>Mã số thuế của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "surrgate",
            "description": "<p>Người đại diện của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>Giám đốc của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>Số fax của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Địa chỉ website của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "representOffice",
            "description": "<p>Địa chỉ văn phòng đại diện của HTX (tùy chọn).</p>"
          },
          {
            "group": "body",
            "type": "String[]",
            "optional": false,
            "field": "docs",
            "description": "<p>Danh sách file liên quan của HTX (tùy chọn).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Hop tac xa u minh ha\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/cooperatives?_id=5df306ee040d111f9b9e56bf"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "successMessage",
            "description": "<p>Số documents đã được update.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"successMessage\": \"Số lượng dữ liệu đã chỉnh sửa: 4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token không hợp lệ.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ID-khong-hop-le",
            "description": "<p>ID không hợp lệ.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Nothing-to-update",
            "description": "<p>Query không kết quả hoặc dữ liệu đã được update.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"Nothing to update\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Cooperatives"
  },
  {
    "type": "post",
    "url": "/api/cooperatives",
    "title": "Thêm HTX mới",
    "version": "1.0.0",
    "name": "PostCooperatives",
    "group": "Cooperatives",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/cooperatives"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foreignName",
            "description": "<p>Tên nước ngoài của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "abbreviationName",
            "description": "<p>Tên viết tắt của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Logo của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Tình trạng họat động của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cooperativeID",
            "description": "<p>Mã số của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax",
            "description": "<p>Mã số thuế của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surrgate",
            "description": "<p>Tên người đại diện của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>Tên giams đốc của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>Địa chỉ fax của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Địa chỉ website của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "representOffice",
            "description": "<p>Địa chỉ văn phòng đại diện của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "docs",
            "description": "<p>Danh sách file tài liệu liên quan đến HTX.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"foreignName\":\"Hop tac xa u minh ha3\",\n\t\"abbreviationName\":\"UMH3\",\n\t\"logo\":\"\",\n\t\"status\":\"Dang hoat dong\",\n\t\"cooperativeID\":\"HTXUMH3\",\n\t\"tax\":\"NN23446\",\n\t\"surrgate\":\"Nguyen Tan Vu\",\n\t\"director\":\"Huynh Van Tan\",\n\t\"phone\":\"0836738224\",\n\t\"email\":\"nn@gmail.com\",\n\t\"fax\":\"NN344\",\n\t\"website\":\"nn.com\",\n\t\"represendOffice\":\"\",\n\t\"docs\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "foreignName",
            "description": "<p>Tên nước ngoài của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "abbreviationName",
            "description": "<p>Tên viết tắt của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Logo của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Tình trạng họat động của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeID",
            "description": "<p>Mã số của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tax",
            "description": "<p>Mã số thuế của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surrgate",
            "description": "<p>Tên người đại diện của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>Tên giams đốc của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>Địa chỉ fax của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Địa chỉ website của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "representOffice",
            "description": "<p>Địa chỉ văn phòng đại diện của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "docs",
            "description": "<p>Danh sách file tài liệu liên quan đến HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của htx trong csdl.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"name\": \"Hop tac xa U Minh Ha\",\n    \"foreignName\": \"Hop tac xa u minh ha\",\n    \"abbreviationName\": \"UMH\",\n    \"logo\": \"\",\n    \"status\": \"Dang hoat dong\",\n    \"cooperativeID\": \"HTXUMH\",\n    \"tax\": \"NN23445\",\n    \"surrgate\": \"Nguyen Tan Vu\",\n    \"director\": \"Huynh Van Tan\",\n    \"address\": \"\",\n    \"phone\": \"0836738224\",\n    \"fax\": \"NN344\",\n    \"website\": \"nn.com\",\n    \"representOffice\": \"\",\n    \"docs\": \"\",\n    \"_id\": \"5decdd74e8296d17b3e7a5a0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "HTX-da-ton-tai-trong-csdl",
            "description": "<p>Hợp tác xã đã tồn tại trong csdl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"HTX da ton tai trong csdl\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Cooperatives"
  },
  {
    "type": "get",
    "url": "/api/cooperatives",
    "title": "Tìm kiếm thông tin HTX.",
    "version": "1.0.0",
    "name": "SearchCooperatives",
    "group": "Cooperatives",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyworks",
            "description": "<p>Dieu kien tim kiem.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "resultNumber",
            "description": "<p>so luong ket qua tra ve theo phan trang (tuy chon).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageNumber",
            "description": "<p>trang du lieu can tra ve theo phan trang (tuy chon).</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/cooperatives/search?pageNumber=0&resultNumber=1&keyworks=Hop tac xa long thanh"
      }
    ],
    "success": {
      "fields": {
        "Response Fileds": [
          {
            "group": "Response Fileds",
            "type": "Object[]",
            "optional": false,
            "field": "records",
            "description": "<p>Danh sach HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records._id",
            "description": "<p>ID cua Hop tac xa.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.name",
            "description": "<p>Tên gọi của hợp tác xã.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.foreignName",
            "description": "<p>Tên nước ngoài của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.abbreviationName",
            "description": "<p>Tên viết tắt.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.logo",
            "description": "<p>Logo của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.status",
            "description": "<p>Thông tin trạng thái của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.cooperativeID",
            "description": "<p>Mã số HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.tax",
            "description": "<p>Mã số thuế của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.surrgate",
            "description": "<p>Người đại diện.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.director",
            "description": "<p>Giám đốc.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.address",
            "description": "<p>Địa chỉ của hợp tác xã.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.phone",
            "description": "<p>Số điện thoại của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.fax",
            "description": "<p>Địa chỉ fax của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.website",
            "description": "<p>Đia chỉ website của HTX.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String",
            "optional": false,
            "field": "records.representOffice",
            "description": "<p>Văn phòng đại diện.</p>"
          },
          {
            "group": "Response Fileds",
            "type": "String[]",
            "optional": false,
            "field": "records.docs",
            "description": "<p>Danh sách tài liệu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\n        {\n            \"_id\": \"5de653f18a92cd1e06fc0b59\",\n            \"name\": \"Hop tac xa nga nam\",\n            \"foreignName\": \"Hop tac xa nga nam\",\n            \"abbreviationName\": \"NN\",\n            \"logo\": \"\",\n            \"status\": \"Dang hoat dong\",\n            \"cooperativeID\": \"HTXNN\",\n            \"tax\": \"NN23442\",\n            \"surrgate\": \"Nguyen Tan Vu\",\n            \"director\": \"Huynh Van Tan\",\n            \"address\": \"\",\n            \"phone\": \"0836738223\",\n            \"fax\": \"NN341\",\n            \"website\": \"nn.com\",\n            \"representOffice\": \"\",\n            \"docs\": \"\"\n        }\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Loi-Trong-qua-trinh-tim-kiem",
            "description": "<p>Lỗi trong quá trình tìm kiếm.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ID-khong-hop-le",
            "description": "<p>ID không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"ID không hợp lệ\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Cooperatives"
  },
  {
    "type": "post",
    "url": "/api/diaries",
    "title": "Tạo nhật ký mới.",
    "version": "1.0.0",
    "name": "PostDiaries",
    "group": "Diaries",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "plant_id",
            "description": "<p>ID của loại cây trồng.</p>"
          },
          {
            "group": "body",
            "type": "String[]",
            "optional": false,
            "field": "area_id",
            "description": "<p>ID của khu vực gieo trồng.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "HTX_id",
            "description": "<p>ID của HTX.</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "begin",
            "description": "<p>Thời gian bắt đầu mùa vụ (dạng ISO-8601)).</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "end",
            "description": "<p>Thời gian kết thúc mùa vụ (dạng ISO-8601)).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"plant_id\":\"dfejdkfsdh\",\n\t\"fields\":[\"5dedc932bad8e32650d38788\",\"5dedc93ebad8e32650d38789\"],\n\t\"HTX_id\":\"UM\",\n\t\"begin\":\"2019-12-13 04:14\",\n\t\"end\":\"2019-12-15 17:20\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plant_id",
            "description": "<p>ID của loại cây trồng.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "area_id",
            "description": "<p>ID của khu vực gieo trồng.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "HTX_id",
            "description": "<p>ID của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "begin",
            "description": "<p>Thời gian bắt đầu mùa vụ (dạng ISO-8601)).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "end",
            "description": "<p>Thời gian kết thúc mùa vụ (dạng ISO-8601)).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của nhật ký trong CSDL.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"plant_id\": \"dfejdkfsdh\",\n    \"fields\": [\n        \"5dedc932bad8e32650d38788\",\n        \"5dedc93ebad8e32650d38789\"\n    ],\n    \"HTX_id\": \"UM\",\n    \"begin\": \"2019-12-12T21:14:00.000Z\",\n    \"end\": \"2019-12-15T10:20:00.000Z\",\n    \"_id\": \"5df32bce13f76d331d8fa1ec\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token không hợp lệ.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Loai-cay-trong-khong-hop-le",
            "description": "<p>Loại cây trồng không hợp lệ.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Khu-vuc-khong-hop-le",
            "description": "<p>Khu vực không hợp lệ.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "HTX-khong-hop-le",
            "description": "<p>Hợp tác xã không hợp lệ.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ngay-bat-dau-khong-hop-le",
            "description": "<p>Ngày bắt đầu không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ngay-ket-thuc-khong-hop-le",
            "description": "<p>Ngày kết thúc không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Thua-",
            "description": "<p>{}-Dang-duoc-su-dung thửa đang được sử dụng</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Loi-trong-qua-trinh-them-vao-CSDL",
            "description": "<p>Lỗi trong qúa trình thêm vào CSDL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"Lỗi trong qúa trình thêm vào CSDL\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Diaries"
  },
  {
    "type": "get",
    "url": "/api/employee",
    "title": "Get danh sách nhân sự",
    "version": "1.0.0",
    "name": "GetEmployee",
    "group": "Employee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>HTX ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageNumber",
            "description": "<p>Số trang</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "resultNumber",
            "description": "<p>Số lượng dữ liệu mỗi trang</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/employee?HTXId=fjdiejdnfjdjfjdiendjfkdmei&pageNumber=1&resultNumber=1"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Tên nhân sự</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ảnh đại diện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>Số CMND của nhân sự</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobTitle",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>Ngày tạo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của nhân sự.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [\n        {\n            \"name\": \"Nguyễn Văn Lợi\",\n            \"avatar\": \"http://localhost:3001/avatar/image-1578136142752.png\",\n            \"personalId\": \"8182213312\",\n            \"address\": \"Cần Thơ\",\n            \"phone\": \"0836810267\",\n            \"email\": \"vanloi@gmail.com\",\n            \"jobTitle\": \"Manager\",\n            \"salary\":\"600\",\n            \"jobDesc\":\"\",\n            \"HTXId\": \"dfsdf\",\n            \"password\": \"123456\",\n            \"created\": \"2020-01-04T11:09:02.758Z\",\n            \"_id\": \"5e10724efde38921cd444999\"\n        }\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"Số điện thoại không hợp lệ\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Employee"
  },
  {
    "type": "patch",
    "url": "/v1/api/cooperatives/:coopID/employee/:empID",
    "title": "Update employee information",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/api/cooperatives/5df316d55818ad286c993446/employee/5e89c41d36b4634f8171ad5a"
      }
    ],
    "name": "PatchEmployee",
    "group": "Employee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "avatar",
            "description": "<p>Employee avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "personalID",
            "description": "<p>Employee personal ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Employee address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Employee phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Employee email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"user\"",
              "\"manager\""
            ],
            "optional": true,
            "field": "jobTitle",
            "description": "<p>Employee jobs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>Employee's cooperactions ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Code",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>response massage</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "result.avatar",
            "description": "<p>Employee avatar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.personalID",
            "description": "<p>Employee personal ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.address",
            "description": "<p>Employee address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.phone",
            "description": "<p>Employee phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.email",
            "description": "<p>Employee email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user\"",
              "\"manager\""
            ],
            "optional": false,
            "field": "result.jobTitle",
            "description": "<p>Employee jobs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.HTXId",
            "description": "<p>Employee's cooperactions ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"message\": \"Updating employee information successfully\",\n    \"result\": {\n        \"_id\": \"5e89c41d36b4634f8171ad5a\",\n        \"name\": \"Trinh Quoc Tuan\",\n        \"avatar\": \"http://localhost:3001/avatar/default.png\",\n        \"personalId\": \"381823821\",\n        \"address\": \"Can THO\",\n        \"phone\": \"0836810225\",\n        \"email\": \"vanloiidk@gmail.com\",\n        \"user\": \"user\",\n        \"HTXId\": \"df12ew\",\n        \"created\": \"2020-04-05T11:42:21.868Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "EmployeeIsNotFound",
            "description": "<p>Employee is not found</p>"
          }
        ]
      }
    },
    "filename": "./routes/v1/employee.router.js",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/api/employee",
    "title": "Thêm nhân sự mới",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/employee"
      }
    ],
    "version": "1.0.1",
    "name": "PostEmployee",
    "group": "Employee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên nhân sự</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ảnh đại diện</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>Số CMND của nhân sự</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobTitle",
            "description": "<p>chức vụ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>ID của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mật khẩu account của nhân sự.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Nguyễn Văn Lợi\",\n    \"avatar\": \"C:/avatar/image-1578136142752.png\",\n    \"personalId\": \"8182213312\",\n    \"address\": \"Cần Thơ\",\n    \"phone\": \"0836810267\",\n    \"email\": \"vanloi@gmail.com\",\n    \"jobTitle\": \"Manager\",\n    \"HTXId\": \"dfsdf\",\n    \"password\": \"123456\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên nhân sự</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ảnh đại diện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>Số CMND của nhân sự</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobTitle",
            "description": "<p>chức vụ.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>ID của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mật khẩu account của nhân sự.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>Ngày tạo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của nhân sự.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n        {\n            \"name\": \"Nguyễn Văn Lợi\",\n            \"avatar\": \"http://localhost:3001/avatar/image-1578136142752.png\",\n            \"personalId\": \"8182213312\",\n            \"address\": \"Cần Thơ\",\n            \"phone\": \"0836810267\",\n            \"email\": \"vanloi@gmail.com\",\n            \"jobTitle\": \"Manager\",\n            \"salary\":\"600\",\n            \"jobDesc\":\"\",\n            \"HTXId\": \"dfsdf\",\n            \"password\": \"123456\",\n            \"created\": \"2020-01-04T11:09:02.758Z\",\n            \"_id\": \"5e10724efde38921cd444999\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ten-nhan-su-khong-hop-le",
            "description": "<p>Tên nhân sự không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "So-dien-thoai-khong-hop-le",
            "description": "<p>Số điện thoaij không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Dia-chi-khong-hop-le",
            "description": "<p>Địa chỉ không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ten-chuc-vu-khong-hop-le",
            "description": "<p>Tên chức vụ không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"Số điện thoại không hợp lệ\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/api/employee",
    "title": "Thêm nhân sự mới",
    "version": "1.0.0",
    "name": "PostEmployee",
    "group": "Employee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Tên nhân sự</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ảnh đại diện</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>Số CMND của nhân sự</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobTitle",
            "description": "<p>chức vụ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>ID của HTX.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mật khẩu account của nhân sự.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Nguyễn Văn Lợi\",\n    \"avatar\": \"C:/avatar/image-1578136142752.png\",\n    \"personalId\": \"8182213312\",\n    \"address\": \"Cần Thơ\",\n    \"phone\": \"0836810267\",\n    \"email\": \"vanloi@gmail.com\",\n    \"jobTitle\": \"Manager\",\n    \"HTXId\": \"dfsdf\",\n    \"password\": \"123456\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Tên nhân sự</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ảnh đại diện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>Số CMND của nhân sự</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobTitle",
            "description": "<p>chức vụ.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>ID của HTX.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mật khẩu account của nhân sự.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>Ngày tạo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của nhân sự.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n        {\n            \"name\": \"Nguyễn Văn Lợi\",\n            \"avatar\": \"http://localhost:3001/avatar/image-1578136142752.png\",\n            \"personalId\": \"8182213312\",\n            \"address\": \"Cần Thơ\",\n            \"phone\": \"0836810267\",\n            \"email\": \"vanloi@gmail.com\",\n            \"jobTitle\": \"Manager\",\n            \"salary\":\"600\",\n            \"jobDesc\":\"\",\n            \"HTXId\": \"dfsdf\",\n            \"password\": \"123456\",\n            \"created\": \"2020-01-04T11:09:02.758Z\",\n            \"_id\": \"5e10724efde38921cd444999\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ten-nhan-su-khong-hop-le",
            "description": "<p>Tên nhân sự không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "So-dien-thoai-khong-hop-le",
            "description": "<p>Số điện thoaij không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Dia-chi-khong-hop-le",
            "description": "<p>Địa chỉ không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ten-chuc-vu-khong-hop-le",
            "description": "<p>Tên chức vụ không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"Số điện thoại không hợp lệ\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Employee"
  },
  {
    "type": "delete",
    "url": "/v1/api/cooperatives/:coopID/employee/:empID",
    "title": "remove employee from cooperatives",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/api/cooperatives/5df316d55818ad286c993446/employee/5e89c41d36b4634f8171ad5a"
      }
    ],
    "name": "removeEmpFromCoop",
    "group": "Employee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>Access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Code",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result._id",
            "description": "<p>Employee id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.avatar",
            "description": "<p>Employee avatar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.personalId",
            "description": "<p>Employee personal ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.address",
            "description": "<p>Employee address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.phone",
            "description": "<p>Employee phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.email",
            "description": "<p>Employee email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.user",
            "description": "<p>Employee role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.HTXId",
            "description": "<p>Cooperatives ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "result.createdDate",
            "description": "<p>Created Date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"message\": \"Remove employee from cooperative successfully\",\n    \"result\": {\n        \"_id\": \"5e84b5fbfb664211daab0a61\",\n        \"name\": \"Huynh Quoc Tuan\",\n        \"avatar\": \"http://localhost:3003/default.png\",\n        \"personalId\": \"384736273\",\n        \"address\": \"Ninh Kieu, Can Tho\",\n        \"phone\": \"093827463\",\n        \"email\": \"admin@gmail.com\",\n        \"user\": \"user\",\n        \"HTXId\": null,\n        \"created\": \"2020-04-01T15:40:43.584Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/v1/employee.router.js",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/v1/api/cooperatives/:coopID/employee/search",
    "title": "Search employee by name",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/api/cooperatives/5df316d55818ad286c993446/employee/search"
      }
    ],
    "name": "searchEmployee",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Keyword</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>Pagination page size</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Pagination page number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"message\": \"Search employe by name successfully\",\n    \"pagination\": {\n        \"pageSize\": 1,\n        \"pageNumber\": 1\n    },\n    \"result\": {\n        \"total\": 2,\n        \"records\": [\n            {\n                \"_id\": \"5e84b5fbfb664211daab0a61\",\n                \"name\": \"Huynh Quoc Tuan\",\n                \"avatar\": \"http://localhost:3003/default.png\",\n                \"personalId\": \"384736273\",\n                \"address\": \"Ninh Kieu, Can Tho\",\n                \"phone\": \"093827463\",\n                \"email\": \"admin@gmail.com\",\n                \"user\": \"user\",\n                \"HTXId\": null,\n                \"created\": \"2020-04-01T15:40:43.584Z\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/v1/employee.router.js",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/api/events",
    "title": "Create new event",
    "name": "CreateNewEvent",
    "group": "Events",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/events",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên sự kiện</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "participants",
            "description": "<p>Danh sách tham gia (mảng object id của user trong htx [&quot;5e75c38c40019a40362038ff&quot;, &quot;5e75c38c40019a40362038ff&quot;])</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "instructionInfo",
            "description": "<p>Thông tin người tập huấn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.name",
            "description": "<p>Tên người tập huấn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.position",
            "description": "<p>Chức danh</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.workUnit",
            "description": "<p>Đơn vị công tác</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "trainedDate",
            "description": "<p>Ngày tập huấn (ISO 8601 format)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "trainedContent",
            "description": "<p>Nội dung tập huấn (pdf, work, excel)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"name\": \"Sự kiện AAA\",\n   \"participants\": [\n       \"5dc7c9fbeae2ba2a92117f4c\",\n       \"5dc7c9fbeae2ba2a92117f4c\"\n   ],\n   \"instructorInfo\": {\n        \"name\": \"Nguyễn Văn A\",\n        \"position\": \"Giám đốc\",\n        \"workUnit\": \"CTU\"\n   },\n   \"trainedDate\": 2020-01-01,\n   \"note\": null,\n   \"coverImage\": image file,\n   \"cooperativeId\": \"HTXUMH3\",\n   \"trainedContent\": content file,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên sự kiện</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "participants",
            "description": "<p>Danh sách tham gia (mảng object id của user trong htx [&quot;5e75c38c40019a40362038ff&quot;, &quot;5e75c38c40019a40362038ff&quot;])</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "instructionInfo",
            "description": "<p>Thông tin người tập huấn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.name",
            "description": "<p>Tên người tập huấn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.position",
            "description": "<p>Chức danh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.workUnit",
            "description": "<p>Đơn vị công tác</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trainedDate",
            "description": "<p>Ngày tập huấn (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "trainedContent",
            "description": "<p>Nội dung tập huấn (pdf, work, excel)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n{\n    \"name\": \"Sự kiện AAA\",\n    \"participants\": [\n        \"5dc7c9fbeae2ba2a92117f4c\",\n        \"5dc7c9fbeae2ba2a92117f4c\"\n    ],\n    \"instructorInfo\": {\n         \"name\": \"Nguyễn Văn A\",\n         \"position\": \"Giám đốc\",\n         \"workUnit\": \"CTU\"\n    },\n    \"trainedDate\": 2020-01-01,\n    \"note\": null,\n    \"coverImage\": \"http://localhost:3001/event/image-1587130134649.png\",\n    \"cooperativeId\": \"HTXUMH3\",\n    \"trainedContent\": \"http://localhost:3001/event/content-1587130134650.docx\",\n    \"_id\": \"5e99af16f035c60e97293e6f\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "name-is-required",
            "description": "<p>Trường tên sự kiện là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cooperativeId-is-required",
            "description": "<p>Tổng Id hợp tác xã là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cooperative-doesnt-exist",
            "description": "<p>Hợp tác xã không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid-coverImage-type",
            "description": "<p>Định dạng ảnh không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "participant-does-not-exist",
            "description": "<p>Người tham gia không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "cooperative does not exist:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Hợp tác xã không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/event.router.js",
    "groupTitle": "Events"
  },
  {
    "type": "delete",
    "url": "/api/events/:id",
    "title": "Delete document event",
    "name": "DeleteEvent",
    "group": "Events",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/events/5e09757502716412c0b026d7",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"successMessage\": \"Document được xóa thành công\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "event-not-found",
            "description": "<p>Document không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Document not found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"Document không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/event.router.js",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/events",
    "title": "Get all events",
    "name": "GetAllEvents",
    "group": "Events",
    "examples": [
      {
        "title": "Get all events with paginating:",
        "content": "curl -i http://localhost:3001/api/events?pageNumber=1&nPerPage=20",
        "type": "curl"
      },
      {
        "title": "Get All events with paginating and specific fields:",
        "content": "curl -i http://localhost:3001/api/events?pageNumber=1&nPerPage=20&cooperativeId=HTXUMH3",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Số thứ tự trang cần lấy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nPerPage",
            "description": "<p>Số lượng sản phẩm trên mỗi trang</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên sự kiện</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "participants",
            "description": "<p>Danh sách tham gia (mảng object id của user trong htx [&quot;5e75c38c40019a40362038ff&quot;, &quot;5e75c38c40019a40362038ff&quot;])</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "instructionInfo",
            "description": "<p>Thông tin người tập huấn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.name",
            "description": "<p>Tên người tập huấn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.position",
            "description": "<p>Chức danh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.workUnit",
            "description": "<p>Đơn vị công tác</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trainedDate",
            "description": "<p>Ngày tập huấn (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "trainedContent",
            "description": "<p>Nội dung tập huấn (pdf, work, excel)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công*</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n\n{\n     \"totalEvents\": 2,\n     \"totalPages\": 1,\n     \"data\": [\n          {\n             \"name\": \"Sự kiện AAA\",\n             \"participants\": [\n                 \"Nguyen Van Loi\",\n                 \"Huynh Quoc Tuan\"\n             ],\n             \"instructorInfo\": {\n                  \"name\": \"Nguyễn Văn A\",\n                  \"position\": \"Giám đốc\",\n                  \"workUnit\": \"CTU\"\n             },\n             \"trainedDate\": 2020-01-01,\n             \"note\": null,\n             \"coverImage\": \"http://localhost:3001/event/image-1587130134649.png\",\n             \"cooperativeId\": \"HTXUMH3\",\n             \"trainedContent\": \"http://localhost:3001/event/content-1587130134650.docx\",\n             \"_id\": \"5e99af16f035c60e97293e6f\"\n          }\n          ...\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Page-not-found",
            "description": "<p>Trang không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Page not found:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"errorMessage\": \"Trang tìm kiếm không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/event.router.js",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/events/:id",
    "title": "Get event",
    "name": "GetEvent",
    "group": "Events",
    "examples": [
      {
        "title": "Get borrowed tool:",
        "content": "curl -i http://localhost:3001/api/events/5e7713bc31d4d0077efd283d",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên sự kiện</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "participants",
            "description": "<p>Danh sách tham gia (mảng object id của user trong htx [&quot;5e75c38c40019a40362038ff&quot;, &quot;5e75c38c40019a40362038ff&quot;])</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "instructionInfo",
            "description": "<p>Thông tin người tập huấn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.name",
            "description": "<p>Tên người tập huấn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.position",
            "description": "<p>Chức danh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.workUnit",
            "description": "<p>Đơn vị công tác</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trainedDate",
            "description": "<p>Ngày tập huấn (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "trainedContent",
            "description": "<p>Nội dung tập huấn (pdf, work, excel)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công*</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n\n{\n          {\n             \"name\": \"Sự kiện AAA\",\n             \"participants\": [\n                 \"Nguyen Van Loi\",\n                 \"Huynh Quoc Tuan\"\n             ],\n             \"instructorInfo\": {\n                  \"name\": \"Nguyễn Văn A\",\n                  \"position\": \"Giám đốc\",\n                  \"workUnit\": \"CTU\"\n             },\n             \"trainedDate\": 2020-01-01,\n             \"note\": null,\n             \"coverImage\": \"http://localhost:3001/event/image-1587130134649.png\",\n             \"cooperativeId\": \"HTXUMH3\",\n             \"trainedContent\": \"http://localhost:3001/event/content-1587130134650.docx\",\n             \"_id\": \"5e99af16f035c60e97293e6f\"\n          }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Page-not-found",
            "description": "<p>Trang không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Document not found:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"errorMessage\": \"Document không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/event.router.js",
    "groupTitle": "Events"
  },
  {
    "type": "patch",
    "url": "/api/events",
    "title": "Update Event",
    "name": "UpdateEvent",
    "group": "Events",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/events/5dc7c9fbeae2ba2a92117f4c",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên sự kiện</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "participants",
            "description": "<p>Danh sách tham gia (mảng object id của user trong htx [&quot;5e75c38c40019a40362038ff&quot;, &quot;5e75c38c40019a40362038ff&quot;])</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "instructionInfo",
            "description": "<p>Thông tin người tập huấn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.name",
            "description": "<p>Tên người tập huấn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.position",
            "description": "<p>Chức danh</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.workUnit",
            "description": "<p>Đơn vị công tác</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "trainedDate",
            "description": "<p>Ngày tập huấn (ISO 8601 format)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "trainedContent",
            "description": "<p>Nội dung tập huấn (pdf, work, excel)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"name\": \"Updated\",\n   \"participants\": [\n       \"5dc7c9fbeae2ba2a92117f4c\"\n   ],\n   \"instructorInfo\": {\n        \"name\": \"Update\",\n        \"position\": \"Update\",\n        \"workUnit\": \"Update\"\n   },\n   \"trainedDate\": 2020-01-01,\n   \"note\": null,\n   \"coverImage\": image file,\n   \"cooperativeId\": \"HTXUMH3\",\n   \"trainedContent\": content file,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên sự kiện</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "participants",
            "description": "<p>Danh sách tham gia (mảng object id của user trong htx [&quot;5e75c38c40019a40362038ff&quot;, &quot;5e75c38c40019a40362038ff&quot;])</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "instructionInfo",
            "description": "<p>Thông tin người tập huấn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.name",
            "description": "<p>Tên người tập huấn</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.position",
            "description": "<p>Chức danh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructionInfo.workUnit",
            "description": "<p>Đơn vị công tác</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trainedDate",
            "description": "<p>Ngày tập huấn (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "trainedContent",
            "description": "<p>Nội dung tập huấn (pdf, work, excel)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n{\n    \"name\": \"Update\",\n    \"participants\": [\n        \"5dc7c9fbeae2ba2a92117f4c\"\n    ],\n    \"instructorInfo\": {\n         \"name\": \"Update\",\n         \"position\": \"Update\",\n         \"workUnit\": \"Update\"\n    },\n    \"trainedDate\": 2020-01-01,\n    \"note\": null,\n    \"coverImage\": \"http://localhost:3001/event/image-1587130134649.png\",\n    \"cooperativeId\": \"HTXUMH3\",\n    \"trainedContent\": \"http://localhost:3001/event/content-1587130134650.docx\",\n    \"_id\": \"5e99af16f035c60e97293e6f\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "name-is-required",
            "description": "<p>Trường tên sự kiện là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cooperativeId-is-required",
            "description": "<p>Tổng Id hợp tác xã là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cooperative-doesnt-exist",
            "description": "<p>Hợp tác xã không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid-coverImage-type",
            "description": "<p>Định dạng ảnh không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "participant-does-not-exist",
            "description": "<p>Người tham gia không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "cooperative does not exist:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Hợp tác xã không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/event.router.js",
    "groupTitle": "Events"
  },
  {
    "type": "post",
    "url": "/api/fertilizers",
    "title": "Create new fertilizer",
    "name": "CreateFertilizer",
    "group": "Fertilizers",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/fertilizers"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ministry",
            "description": "<p>Bộ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Tỉnh</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise",
            "description": "<p>Tên doanh nghiệp</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Loại phân bón</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên phân bón</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Thành phần, hàm lượng chất dinh dưỡng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lawDocument",
            "description": "<p>Căn cứ, tiêu chuẩn, quy định</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isoCertOrganization",
            "description": "<p>Tổ chức chứng nhận hợp quy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufactureAndImport",
            "description": "<p>Nhập khẩu, xuất khẩu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"ministry\": \"Công thương\",\n    \"province\": \"Bà Rịa - Vũng Tàu\",\n    \"enterprise\": \"Công ty TNHH Sản xuất NGÔI SAO VÀNG\",\n    \"type\": \"Phân vô cơ\",\n    \"name\": \"Phân vi lượng TE MAX ( SUPER CHELATE)\",\n    \"ingredient\": \"\",\n    \"lawDocument\": \"\",\n    \"isoCertOrganization\": \"\",\n    \"manufactureAndImport\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ministry",
            "description": "<p>Bộ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Tỉnh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enterprise",
            "description": "<p>Tên doanh nghiệp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Loại phân bón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên phân bón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Thành phần, hàm lượng chất dinh dưỡng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lawDocument",
            "description": "<p>Căn cứ, tiêu chuẩn, quy định</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isoCertOrganization",
            "description": "<p>Tổ chức chứng nhận hợp quy</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufactureAndImport",
            "description": "<p>Nhập khẩu, xuất khẩu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"_id\": \"5de75a92f4e889141cc24f7d\",\n    \"ministry\": \"Công thương\",\n    \"province\": \"Bà Rịa - Vũng Tàu\",\n    \"enterprise\": \"Công ty TNHH Sản xuất NGÔI SAO VÀNG\",\n    \"type\": \"Phân vô cơ\",\n    \"name\": \"Phân vi lượng TE MAX ( SUPER CHELATE)\",\n    \"ingredient\": \"\",\n    \"lawDocument\": \"\",\n    \"isoCertOrganization\": \"\",\n    \"manufactureAndImport\": \"\",\n    \"created\": \"2019-12-04T07:04:50.974Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Name-is-required",
            "description": "<p>Thiếu trường tên phân bón</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Fertilizer-exists",
            "description": "<p>Phân bón đã tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Phân bón tồn tại:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Phân bón với tên '\" + name + \"' đã tồn tại\"\n}",
          "type": "json"
        },
        {
          "title": "Thiếu trường tên phân bón:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Vui lòng nhập tên phân bón\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./router.js",
    "groupTitle": "Fertilizers"
  },
  {
    "type": "delete",
    "url": "/api/fertilizers",
    "title": "Delete fertilizer",
    "name": "DeleteFertilizer",
    "version": "1.0.0",
    "group": "Fertilizers",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/fertilizers?_id=5de75a92f4e889141cc24ef5"
      },
      {
        "url": "http://localhost:3001/api/fertilizers?name=Phân bón Calcium Nitrate( Calcinit)"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của phân bón</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên của phân bón</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"successMessage\": \"Xóa phân bón thành công\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"errorMessage\": \"Không tìm thấy phân bón\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Fertilizers"
  },
  {
    "type": "get",
    "url": "/api/fertilizers",
    "title": "Get all fertilizers with pageNumber and nPerPage",
    "name": "GetAllFertilizers",
    "group": "Fertilizers",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/fertilizers?pageNumber=9&nPerPage=20"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Số thứ tự trang cần lấy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nPerPage",
            "description": "<p>Số lượng thuốc bvtv trên mỗi trang</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalProducts",
            "description": "<p>Tổng số phân bón trong danh mục</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>Tổng số lượng trang</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ministry",
            "description": "<p>Bộ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Tỉnh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enterprise",
            "description": "<p>Tên doanh nghiệp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Loại phân bón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên phân bón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Thành phần, hàm lượng chất dinh dưỡng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lawDocument",
            "description": "<p>Căn cứ, tiêu chuẩn, quy định</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isoCertOrganization",
            "description": "<p>Tổ chức chứng nhận hợp quy</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufactureAndImport",
            "description": "<p>Nhập khẩu, xuất khẩu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"totalProducts\": 14152,\n    \"totalPages\": 708,\n    \"data\": [\n        {\n            \"_id\": \"5de75a92f4e889141cc24ee8\",\n            \"ministry\": \"Công thương\",\n            \"province\": \"Bà Rịa - Vũng Tàu\",\n            \"enterprise\": \"Công ty TNHH YARA Việt Nam\",\n            \"type\": \"Phân vô cơ\",\n            \"name\": \"Phân bón NPK Kristalon Scarlet (7.5-12-36+TE)\",\n            \"ingredient\": \"Nts: 7,5%; P2O5hh: 12%; K2Ohh: 36%; S: 4%; B: 0,025%; Cu: 0,01%; Fe: 0,07%; Zn: 0,025%; Mn: 0,04%; Mo: 0,004%; Độ ẩm: 0,8%\",\n            \"lawDocument\": \"Nts: 7,5%; P2O5hh: 12%; K2Ohh: 36%; S: 4%; B: 0,025%; Cu: 0,01%; Fe: 0,07%; Zn: 0,025%; Mn: 0,04%; Mo: 0,004%; Độ ẩm: 0,8%\",\n            \"isoCertOrganization\": \"\",\n            \"manufactureAndImport\": \"\",\n            \"created\": \"2019-12-04T07:04:50.952Z\"\n        },\n        {\n            \"_id\": \"5de75a92f4e889141cc24efd\",\n            \"ministry\": \"Công thương\",\n            \"province\": \"Bà Rịa - Vũng Tàu\",\n            \"enterprise\": \"Công ty TNHH YARA Việt Nam\",\n            \"type\": \"Phân vô cơ\",\n            \"name\": \"Phân bón NPK 15-9-20+TE\",\n            \"ingredient\": \"Nts: 15%; P2O5hh: 9%; K2Ohh: 20%; MgO: 1,8%; S: 3,8%; B: 0,015%; Mn: 0,02%; Zn: 0,02%; Độ ẩm 0,8%\",\n            \"lawDocument\": \"Nts: 15%; P2O5hh: 9%; K2Ohh: 20%; MgO: 1,8%; S: 3,8%; B: 0,015%; Mn: 0,02%; Zn: 0,02%; Độ ẩm 0,8%\",\n            \"isoCertOrganization\": \"\",\n            \"manufactureAndImport\": \"\",\n            \"created\": \"2019-12-04T07:04:50.956Z\"\n        },\n        {\n            \"_id\": \"5de75a92f4e889141cc24f7d\",\n            \"ministry\": \"Công thương\",\n            \"province\": \"Bà Rịa - Vũng Tàu\",\n            \"enterprise\": \"Công ty TNHH Sản xuất NGÔI SAO VÀNG\",\n            \"type\": \"Phân vô cơ\",\n            \"name\": \"Phân vi lượng TE MAX ( SUPER CHELATE)\",\n            \"ingredient\": \"\",\n            \"lawDocument\": \"\",\n            \"isoCertOrganization\": \"\",\n            \"manufactureAndImport\": \"\",\n            \"created\": \"2019-12-04T07:04:50.974Z\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./router.js",
    "groupTitle": "Fertilizers"
  },
  {
    "type": "get",
    "url": "/api/fertilizers",
    "title": "Get fertilizer by query",
    "name": "GetFertilizerByQuery",
    "version": "1.0.0",
    "group": "Fertilizers",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/fertilizers/query?_id=5de75a92f4e889141cc24ef5"
      },
      {
        "url": "http://localhost:3001/api/fertilizers/query?name=Phân bón Calcium Nitrate( Calcinit)"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ministry",
            "description": "<p>Bộ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Tỉnh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enterprise",
            "description": "<p>Tên doanh nghiệp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Loại phân bón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên phân bón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Thành phần, hàm lượng chất dinh dưỡng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lawDocument",
            "description": "<p>Căn cứ, tiêu chuẩn, quy định</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isoCertOrganization",
            "description": "<p>Tổ chức chứng nhận hợp quy</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufactureAndImport",
            "description": "<p>Nhập khẩu, xuất khẩu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"_id\": \"5de75a92f4e889141cc24ef5\",\n        \"ministry\": \"Công thương\",\n        \"province\": \"Bà Rịa - Vũng Tàu\",\n        \"enterprise\": \"Công ty TNHH YARA Việt Nam\",\n        \"type\": \"Phân vô cơ\",\n        \"name\": \"Phân bón Calcium Nitrate( Calcinit)\",\n        \"ingredient\": \"Nts: 15,4%; CaO: 26,5%; Độ ẩm: 0,8%\",\n        \"lawDocument\": \"Nts: 15,4%; CaO: 26,5%; Độ ẩm: 0,8%\",\n        \"isoCertOrganization\": \"\",\n        \"manufactureAndImport\": \"\",\n        \"created\": \"2019-12-04T07:04:50.955Z\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"errorMessage\": \"Không tìm thấy phân bón\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Fertilizers"
  },
  {
    "type": "patch",
    "url": "/api/fertilizers",
    "title": "Update fertilizer",
    "name": "UpdateFertilizer",
    "version": "1.0.0",
    "group": "Fertilizers",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/fertilizers?_id=5de75a92f4e889141cc24f7d"
      },
      {
        "url": "http://localhost:3001/api/fertilizers?_name=Phân vi lượng TE MAX ( SUPER CHELATE)"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ministry",
            "description": "<p>Bộ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Tỉnh</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise",
            "description": "<p>Tên doanh nghiệp</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Loại phân bón</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên phân bón</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Thành phần, hàm lượng chất dinh dưỡng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lawDocument",
            "description": "<p>Căn cứ, tiêu chuẩn, quy định</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isoCertOrganization",
            "description": "<p>Tổ chức chứng nhận hợp quy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufactureAndImport",
            "description": "<p>Nhập khẩu, xuất khẩu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"ministry\": \"updated\",\n    \"province\": \"updated\",\n    \"enterprise\": \"updated\",\n    \"type\": \"updated\",\n    \"name\": \"updated\",\n    \"ingredient\": \"updated\",\n    \"lawDocument\": \"updated\",\n    \"isoCertOrganization\": \"updated\",\n    \"manufactureAndImport\": \"updated\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ministry",
            "description": "<p>Bộ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Tỉnh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enterprise",
            "description": "<p>Tên doanh nghiệp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Loại phân bón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên phân bón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Thành phần, hàm lượng chất dinh dưỡng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lawDocument",
            "description": "<p>Căn cứ, tiêu chuẩn, quy định</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isoCertOrganization",
            "description": "<p>Tổ chức chứng nhận hợp quy</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufactureAndImport",
            "description": "<p>Nhập khẩu, xuất khẩu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"_id\": \"5de75a92f4e889141cc24f7d\",\n    \"ministry\": \"updated\",\n    \"province\": \"updated\",\n    \"enterprise\": \"updated\",\n    \"type\": \"updated\",\n    \"name\": \"updated\",\n    \"ingredient\": \"updated\",\n    \"lawDocument\": \"updated\",\n    \"isoCertOrganization\": \"updated\",\n    \"manufactureAndImport\": \"updated\",\n    \"created\": \"2019-12-04T07:04:50.974Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"errorMessage\": \"Không tìm thấy phân bón\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Fertilizers"
  },
  {
    "type": "post",
    "url": "/goods-issues",
    "title": "Create new goods issue",
    "name": "CreateGoodsIssue",
    "group": "GoodIssues",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/goods-issues"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>Id của người nhận (dựa trên _id lúc tạo user)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Id của sản phẩm (có thể là id của Thuốc bvtv hoặc Phân bón hoặc Giống)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "issuedDate",
            "description": "<p>Ngày xuất kho (ISO 8601 format)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "receivedDate",
            "description": "<p>Ngày nhận sản phẩm (ISO 8601 format)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"receiverId\": \"5e058f0f089c052958b35c59\",\n    \"productId\": \"5e057818a1c1111795e29b76\",\n    \"quantity\": \"2\",\n    \"issuedDate\": \"2019-12-12\",\n    \"receivedDate\": \"2019-12-12\",\n    \"productType\": \"Thuốc bvtv\",\n    \"goodsReceiptId\": \"21893453567654\",\n    \"cooperativeId\": \"HTXNN\",\n    \"note\": \"Just note something you want\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>Id của người nhận (dựa trên _id lúc tạo user)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Id của sản phẩm (có thể là id của Thuốc bvtv hoặc Phân bón hoặc Giống)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "issuedDate",
            "description": "<p>Ngày xuất kho (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "receivedDate",
            "description": "<p>Ngày nhận thuốc (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n\n{\n    \"receiverId\": \"5e058f0f089c052958b35c59\",\n    \"productId\": \"5e057818a1c1111795e29b76\",\n    \"productType\": \"Thuốc bvtv\",\n    \"quantity\": \"2\",\n    \"issuedDate\": \"2019-12-12\",\n    \"receivedDate\": \"2019-12-12\",\n    \"goodsReceiptId\": \"21893453567654\",\n    \"cooperativeId\": \"HTXNN\",\n    \"note\": \"Just note something you want\",\n    \"created_at\": \"2019-12-30T02:35:32.306Z\",\n    \"_id\": \"5e0962f326b7b011c825789c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productType-is-required",
            "description": "<p>Trường loại sản phẩm là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productType-does-not-exist",
            "description": "<p>Trường loại sản phẩm không tồn tại (Loại sp phải là &quot;Thuốc bvtv&quot; || &quot;Phân bón&quot; || &quot;Giống&quot;)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "receiverId-is-required",
            "description": "<p>Trường id người nhận là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productId-is-required",
            "description": "<p>Trường id sản phẩm là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "quantity-is-required",
            "description": "<p>Số lượng là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "quantity-is-positive-integer",
            "description": "<p>Số lượng phải là số nguyên dương</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "issuedDate-is-ISO8061-format",
            "description": "<p>Ngày xuất kho phải là định dạng ISO 8601</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "receivedDate-is-ISO8061-format",
            "description": "<p>Ngày nhận phải là định dạng ISO 8601</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cooperativeId-is-required",
            "description": "<p>Trường id hợp tác xã là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "receiptId-is-required",
            "description": "<p>Trường id hóa đơn nhập là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productId-does-not-exist",
            "description": "<p>Sản phẩm không tồn tại trong danh mục</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productId-is-invalid",
            "description": "<p>Id sản phẩm không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cooperativeId-does-not-exist",
            "description": "<p>Hợp tác xã không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "receiverId-does-not-exist",
            "description": "<p>Người nhận không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "receiverId-is-invalid",
            "description": "<p>Id người nhận không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "goodsReceiptId-does-not-exist",
            "description": "<p>Hóa đơn nhập không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "goodsReceiptId-is-invalid",
            "description": "<p>Id hóa đơn nhập không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "productType is required:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Vui lòng nhập loại sản phẩm\"\n}",
          "type": "json"
        },
        {
          "title": "productType does not exist:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Loại sản phẩm không tồn tại\"\n}",
          "type": "json"
        },
        {
          "title": "issuedDate is ISO 8601:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Ngày xuất kho không hợp lệ\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./routes/v1/goodsIssue.router.js",
    "groupTitle": "GoodIssues"
  },
  {
    "type": "delete",
    "url": "/goods-issues/:id",
    "title": "Delete goods issue by id",
    "name": "DeleteGoodsIssueById",
    "group": "GoodIssues",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/goods-issues/5e09757502716412c0b026d7"
      }
    ],
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"successMessage\": \"Hóa đơn được xóa thành công\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Goods-issue-not-found",
            "description": "<p>Hóa đơn xuất không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Goods issue not found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"Id Hóa đơn xuất kho không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./routes/v1/goodsIssue.router.js",
    "groupTitle": "GoodIssues"
  },
  {
    "type": "get",
    "url": "/goods-issues",
    "title": "Get all goods issue",
    "name": "GetAllGoodsIssue",
    "group": "GoodIssues",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/goods-issues"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Số thứ tự trang cần lấy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nPerPage",
            "description": "<p>Số lượng sản phẩm trên mỗi trang</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalProducts",
            "description": "<p>Tổng số phân bón trong danh mục</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>Tổng số lượng trang</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>Id của người nhận (dựa trên _id lúc tạo user)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Id của sản phẩm (có thể là id của Thuốc bvtv hoặc Phân bón hoặc Giống)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "issuedDate",
            "description": "<p>Ngày xuất kho (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "receivedDate",
            "description": "<p>Ngày nhận thuốc (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"totalGoodsIssues\": 2,\n    \"totalPages\": 1,\n    \"data\": [\n        {\n            \"_id\": \"5e09757502716412c0b026d7\",\n            \"receiverId\": \"5e058f0f089c052958b35c59\",\n            \"productId\": \"5e057818a1c1111795e29b76\",\n            \"productType\": \"Thuốc bvtv\",\n            \"quantity\": \"2\",\n            \"issuedDate\": \"2019-12-30\",\n            \"receivedDate\": \"2019-12-31\",\n            \"goodsReceiptId\": \"21893453567654\",\n            \"cooperativeId\": \"HTXNN\",\n            \"note\": \"Just note something you want\",\n            \"created_at\": \"2019-12-30T03:56:35.656Z\",\n            \"productName\": \"Abatimec 1.8EC\",\n            \"receiverName\": \"khang\"\n        },\n        {\n            \"_id\": \"5e097554b50bae12772bdd09\",\n            \"receiverId\": \"5e058f0f089c052958b35c59\",\n            \"productId\": \"5e057818a1c1111795e29b76\",\n            \"productType\": \"Thuốc bvtv\",\n            \"quantity\": \"2\",\n            \"issuedDate\": \"2019-12-12\",\n            \"receivedDate\": \"2019-12-12\",\n            \"goodsReceiptId\": \"21893453567654\",\n            \"cooperativeId\": \"HTXNN\",\n            \"note\": \"Just note something you want\",\n            \"created_at\": \"2019-12-30T03:55:39.570Z\",\n            \"productName\": \"Abatimec 1.8EC\",\n            \"receiverName\": \"khang\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Page-not-found",
            "description": "<p>Trang không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Page not found:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"errorMessage\": \"Trang tìm kiếm không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./routes/v1/goodsIssue.router.js",
    "groupTitle": "GoodIssues"
  },
  {
    "type": "get",
    "url": "/goods-issues/:id",
    "title": "Get goods issue by id",
    "name": "GetGoodsIssueById",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/goods-issues/5e09757502716412c0b026d7"
      }
    ],
    "version": "1.0.0",
    "group": "GoodIssues",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>Id của người nhận (dựa trên _id lúc tạo user)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Id của sản phẩm (có thể là id của Thuốc bvtv hoặc Phân bón hoặc Giống)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "issuedDate",
            "description": "<p>Ngày xuất kho (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "receivedDate",
            "description": "<p>Ngày nhận thuốc (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"_id\": \"5e09757502716412c0b026d7\",\n    \"receiverId\": \"5e058f0f089c052958b35c59\",\n    \"productId\": \"5e057818a1c1111795e29b76\",\n    \"productType\": \"Thuốc bvtv\",\n    \"quantity\": \"2\",\n    \"issuedDate\": \"2019-12-30\",\n    \"receivedDate\": \"2019-12-31\",\n    \"goodsReceiptId\": \"21893453567654\",\n    \"cooperativeId\": \"HTXNN\",\n    \"note\": \"Just note something you want\",\n    \"created_at\": \"2019-12-30T03:56:35.656Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Goods-issue-not-found",
            "description": "<p>Hóa đơn xuất không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Goods issue not found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"Id Hóa đơn xuất kho không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./routes/v1/goodsIssue.router.js",
    "groupTitle": "GoodIssues"
  },
  {
    "type": "patch",
    "url": "/goods-issues",
    "title": "Update goods issue by id",
    "name": "UpdateGoodsIssueById",
    "group": "GoodIssues",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/goods-issues/5e09757502716412c0b026d7"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>Id của người nhận (dựa trên _id lúc tạo user)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Id của sản phẩm (có thể là id của Thuốc bvtv hoặc Phân bón hoặc Giống)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "issuedDate",
            "description": "<p>Ngày xuất kho (ISO 8601 format)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "receivedDate",
            "description": "<p>Ngày nhận sản phẩm (ISO 8601 format)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"receiverId\": \"5e058f0f089c052958b35c59\",\n    \"productId\": \"5e057818a1c1111795e29b76\",\n    \"quantity\": \"900\",\n    \"issuedDate\": \"2019-01-01\",\n    \"receivedDate\": \"2019-01-01\",\n    \"productType\": \"Thuốc bvtv\",\n    \"goodsReceiptId\": \"21893453567654\",\n    \"cooperativeId\": \"HTXNN\",\n    \"note\": \"updated\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>Id của người nhận (dựa trên _id lúc tạo user)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Id của sản phẩm (có thể là id của Thuốc bvtv hoặc Phân bón hoặc Giống)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "issuedDate",
            "description": "<p>Ngày xuất kho (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "receivedDate",
            "description": "<p>Ngày nhận thuốc (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"_id\": \"5e09757502716412c0b026d7\",\n    \"receiverId\": \"5e058f0f089c052958b35c59\",\n    \"productId\": \"5e057818a1c1111795e29b76\",\n    \"productType\": \"Thuốc bvtv\",\n    \"quantity\": \"900\",\n    \"issuedDate\": \"2019-01-01\",\n    \"receivedDate\": \"2019-01-01\",\n    \"goodsReceiptId\": \"21893453567654\",\n    \"cooperativeId\": \"HTXNN\",\n    \"note\": \"updated\",\n    \"created_at\": \"2019-12-30T03:59:20.896Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productType-does-not-exist",
            "description": "<p>Trường loại sản phẩm không tồn tại (Loại sp phải là &quot;Thuốc bvtv&quot; || &quot;Phân bón&quot; || &quot;Giống&quot;)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "quantity-is-positive-integer",
            "description": "<p>Số lượng phải là số nguyên dương</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "issuedDate-is-ISO8061-format",
            "description": "<p>Ngày xuất kho phải là định dạng ISO 8601</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "receivedDate-is-ISO8061-format",
            "description": "<p>Ngày nhận phải là định dạng ISO 8601</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productId-does-not-exist",
            "description": "<p>Sản phẩm không tồn tại trong danh mục</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productId-is-invalid",
            "description": "<p>Id sản phẩm không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cooperativeId-does-not-exist",
            "description": "<p>Hợp tác xã không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "receiverId-does-not-exist",
            "description": "<p>Người nhận không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "receiverId-is-invalid",
            "description": "<p>Id người nhận không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Goods-issue-not-found",
            "description": "<p>Hóa đơn xuất không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "goodsReceiptId-does-not-exist",
            "description": "<p>Hóa đơn nhập không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "goodsReceiptId-is-invalid",
            "description": "<p>Id hóa đơn nhập không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Goods issue not found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"Id Hóa đơn xuất kho không tồn tại\"\n}",
          "type": "json"
        },
        {
          "title": "productType is required:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Vui lòng nhập loại sản phẩm\"\n}",
          "type": "json"
        },
        {
          "title": "productType does not exist:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Loại sản phẩm không tồn tại\"\n}",
          "type": "json"
        },
        {
          "title": "issuedDate is ISO 8601:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Ngày xuất kho không hợp lệ\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./routes/v1/goodsIssue.router.js",
    "groupTitle": "GoodIssues"
  },
  {
    "type": "delete",
    "url": "/aip/goodsReceipts?queryParam",
    "title": "Xóa thông tin của HTX",
    "version": "1.0.0",
    "name": "DeleteGoodsReceipts",
    "group": "GoodsReceipts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_id",
            "description": "<p>ID của hóa đơn</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/goodsReceipts?_id=sdfklsdjfsdfje23kj"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Thông báo số lượng thông tin đã xóa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"responseMessage\": \"Đã xóa dữ 1 liệu\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Khong-tim-thay-du-lieu-can-xoa",
            "description": "<p>Không tìm thấy dữ liệu cần xóa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n \"errorMessage\": \"Không tìm thấy dữ liệu cần xóa \"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "GoodsReceipts"
  },
  {
    "type": "get",
    "url": "/aip/goodsReceipts?queryParam",
    "title": "Tìm kiếm thông tin HTX",
    "version": "1.0.0",
    "name": "GetGoodsReceipts",
    "group": "GoodsReceipts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageNumber",
            "description": "<p>Số thứ tự trang cần tìm lấy bắt đầu từ 0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "resulNumber",
            "description": "<p>Số lượng dữ liệu mỗi trang</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/goodsReceipts?pageNumber=1&resultNumber=1"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Thông báo số lượng thông tin đã xóa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"5e0f14ad3d3b5928ff43fdff\",\n        \"cooperative_id\": \"sdfsdfsdf\",\n        \"transDate\": \"2019-10-12T07:40:00.000Z\",\n        \"product_id\": \"sdfsd\",\n        \"product_type\": \"plant\",\n        \"detail\": [\n            {\n                \"quantity\": \"200\",\n                \"price\": 260000,\n                \"patchCode\": null,\n                \"expireDate\": \"2019-12-30 15:30\"\n            },\n            {\n                \"quantity\": \"200\",\n                \"price\": 260000,\n                \"patchCode\": null,\n                \"expireDate\": \"2019-12-30 15:30\"\n            }\n        ],\n        \"inDate\": \"1970-01-01T00:00:00.000Z\",\n        \"notes\": \"dsfdfsd sfdf\",\n        \"createdDate\": \"2020-01-03T10:17:17.697Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Khong-tim-thay-du-lieu-can-xoa",
            "description": "<p>Không tìm thấy dữ liệu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n \"errorMessage\": \"Không tìm thấy dữ liệu \"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "GoodsReceipts"
  },
  {
    "type": "get",
    "url": "/aip/goodsReceipts/search?queryParam",
    "title": "Xóa thông tin của HTX",
    "version": "1.0.0",
    "name": "GetGoodsReceipts",
    "group": "GoodsReceipts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageNumber",
            "description": "<p>Số thứ tự trang cần tìm lấy bắt đầu từ 0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "resulNumber",
            "description": "<p>Số lượng dữ liệu mỗi trang</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Mã số hóa đơn nhập kho</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/goodsReceipts/search?_id=sdfsdjfsfowie2eqdjjf"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Thông báo số lượng thông tin đã xóa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"5e0f14ad3d3b5928ff43fdff\",\n        \"cooperative_id\": \"sdfsdfsdf\",\n        \"transDate\": \"2019-10-12T07:40:00.000Z\",\n        \"product_id\": \"sdfsd\",\n        \"product_type\": \"plant\",\n        \"detail\": [\n            {\n                \"quantity\": \"200\",\n                \"price\": 260000,\n                \"patchCode\": null,\n                \"expireDate\": \"2019-12-30 15:30\"\n            },\n            {\n                \"quantity\": \"200\",\n                \"price\": 260000,\n                \"patchCode\": null,\n                \"expireDate\": \"2019-12-30 15:30\"\n            }\n        ],\n        \"inDate\": \"1970-01-01T00:00:00.000Z\",\n        \"notes\": \"dsfdfsd sfdf\",\n        \"createdDate\": \"2020-01-03T10:17:17.697Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Khong-tim-thay-du-lieu-can-xoa",
            "description": "<p>Không tìm thấy dữ liệu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n \"errorMessage\": \"Không tìm thấy dữ liệu \"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "GoodsReceipts"
  },
  {
    "type": "post",
    "url": "/v1/api/goodsReceipy",
    "title": "Thêm đơn nhập hàng mới.",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/api/goodsReceipt/"
      }
    ],
    "name": "postGoodsReceipts",
    "group": "GoodsReceipts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cooperative_id",
            "description": "<p>ID của hợp tác xã</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>ID của sản phẩm</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_type",
            "description": "<p>Loại sản phẩm được nhập</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "transDate",
            "description": "<p>Ngày mua</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "Detail",
            "description": "<p>Danh sách các lô đã mua</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Detail.patchCode",
            "description": "<p>Max số lô</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Detail.quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Detail.price",
            "description": "<p>Đơn giá</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Detail.expireDate",
            "description": "<p>Ngày hết hạn</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "inDate",
            "description": "<p>Ngày nhập kho</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"cooperative_id\": \"sdfsdfsdf\",\n    \"transDate\": \"2019-10-12T07:40:00.000Z\",\n    \"product_id\": \"sdfsd\",\n    \"product_type\": \"plant\",\n    \"price\": 900000,\n    \"detail\": [\n        {\n            \"quantity\": \"200\",\n            \"patchCode\": null,\n            \"expireDate\": \"2019-12-30 15:30\"\n        },\n        {\n            \"quantity\": \"200\",\n            \"patchCode\": null,\n            \"expireDate\": \"2019-12-30 15:30\"\n        }\n    ],\n    \"inDate\": \"1970-01-01T00:00:00.000Z\",\n    \"notes\": \"dsfdfsd sfdf\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperative_id",
            "description": "<p>ID của hợp tác xã</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>ID của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product_type",
            "description": "<p>Loại sản phẩm được nhập</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "transDate",
            "description": "<p>Ngày mua</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Detail",
            "description": "<p>Danh sách các lô đã mua</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Detail.patchCode",
            "description": "<p>Max số lô</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Detail.quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Detail.price",
            "description": "<p>Đơn giá</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Detail.expireDate",
            "description": "<p>Ngày hết hạn</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "inDate",
            "description": "<p>Ngày nhập kho</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của hóa đơn nhập hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Ngày khởi tạo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"cooperative_id\": \"sdfsdfsdf\",\n    \"transDate\": \"2019-10-12T07:40:00.000Z\",\n    \"product_id\": \"sdfsd\",\n    \"product_type\": \"plant\",\n    \"price\": 900000,\n    \"detail\": [\n        {\n            \"quantity\": 200,\n            \"patchCode\": null,\n            \"expireDate\": \"2019-12-30 15:30\"\n        },\n        {\n            \"quantity\": 200,\n            \"patchCode\": null,\n            \"expireDate\": \"2019-12-30 15:30\"\n        }\n    ],\n    \"inDate\": \"1970-01-01T00:00:00.000Z\",\n    \"notes\": \"dsfdfsd sfdf\",\n    \"createdDate\": \"2020-01-03T10:17:17.697Z\",\n    \"_id\": \"5e0f14ad3d3b5928ff43fdff\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "404-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"Token không hợp lệ\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/v1/goodsReceipt.route.js",
    "groupTitle": "GoodsReceipts"
  },
  {
    "type": "post",
    "url": "/api/plant-protection-products",
    "title": "Create new plant protection product",
    "name": "CreatePlantProtectionProduct",
    "version": "1.0.0",
    "group": "PlantProtectionProducts",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/plant-protection-products"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activeIngredient",
            "description": "<p>Hoạt chất</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Hàm lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plantProtectionProductGroup",
            "description": "<p>Nhóm thuốc</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ghs",
            "description": "<p>Nhóm độc GHS</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "who",
            "description": "<p>Nhóm độc WHO</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "scopeOfUse",
            "description": "<p>Phạm vi sử dụng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plant",
            "description": "<p>Cây trồng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pest",
            "description": "<p>Dịch hại</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dosage",
            "description": "<p>Liều lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phi",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>Cách dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "registrationInfo",
            "description": "<p>Thông tin đăng ký</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registrationUnit",
            "description": "<p>Đơn vị đăng ký</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registrationUnitAddress",
            "description": "<p>Địa chỉ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Nhà sản xuất</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturerAddress",
            "description": "<p>Địa chi sản xuất</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \" Ababetter  3.6EC\",\n    \"activeIngredient\": \"Abamectin\",\n    \"content\": \"36g/l\",\n    \"plantProtectionProductGroup\": \"Thuốc trừ sâu\",\n    \"ghs\": \"7\",\n    \"who\": \"6\",\n    \"scopeOfUse\": [\n        {\n            \"plant\": \"dưa hấu\",\n            \"pest\": \"bọ trĩ\",\n            \"dosage\": \"0.2 - 0.3 lít/ha\",\n            \"phi\": \"7\",\n            \"usage\": \"Lượng nước phun 400 lít/ha. Phun tkhi mật độ \\r\\nbọ trĩ  2-3 con/ ngọn\"\n        },\n        {\n            \"plant\": \"lúa\",\n            \"pest\": \"sâu cuốn lá\",\n            \"dosage\": \"200 - 300 ml/ha\",\n            \"phi\": \"7\",\n            \"usage\": \"Lượng nước phun 400 lít/ha. Phun thuốc khi sâu tuổi 1-2\"\n        }\n    ],\n    \"registrationInfo\": {\n        \"registrationUnit\": \"Công ty TNHH MTV Lucky\",\n        \"registrationUnitAddress\": \"\",\n        \"manufacturer\": \"Hebei Yetian Agrochemicals Co., Ltd.\",\n        \"manufacturerAddress\": \"Xiyangling, East Circle Road, 2HD Shi Jia Zhuang City, Hebei, China.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activeIngredient",
            "description": "<p>Hoạt chất</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Hàm lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plantProtectionProductGroup",
            "description": "<p>Nhóm thuốc</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ghs",
            "description": "<p>Nhóm độc GHS</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "who",
            "description": "<p>Nhóm độc WHO</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "scopeOfUse",
            "description": "<p>Phạm vi sử dụng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plant",
            "description": "<p>Cây trồng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pest",
            "description": "<p>Dịch hại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dosage",
            "description": "<p>Liều lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phi",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>Cách dùng</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "registrationInfo",
            "description": "<p>Thông tin đăng ký</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registrationUnit",
            "description": "<p>Đơn vị đăng ký</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registrationUnitAddress",
            "description": "<p>Địa chỉ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Nhà sản xuất</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturerAddress",
            "description": "<p>Địa chi sản xuất</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "pppId",
            "description": "<p>ID của thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của thuốc bảo vệ thực vật || Phạm vi sử dụng || Thông tin đăng ký</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n    \"name\": \" Ababetter  3.6EC\",\n    \"activeIngredient\": \"Abamectin\",\n    \"content\": \"36g/l\",\n    \"plantProtectionProductGroup\": \"Thuốc trừ sâu\",\n    \"ghs\": \"7\",\n    \"who\": \"6\",\n    \"created\": \"2019-11-14T16:43:16.899Z\",\n    \"_id\": \"5dcd842416d4391c7f8a4265\",\n    \"scopeOfUse\": [\n        {\n            \"pppId\": \"5dcd842416d4391c7f8a4265\",\n            \"plant\": \"dưa hấu\",\n            \"pest\": \"bọ trĩ\",\n            \"dosage\": \"0.2 - 0.3 lít/ha\",\n            \"phi\": \"7\",\n            \"usage\": \"Lượng nước phun 400 lít/ha. Phun tkhi mật độ \\r\\nbọ trĩ  2-3 con/ ngọn\",\n            \"created\": \"2019-11-14T16:43:16.900Z\",\n            \"_id\": \"5dcd842416d4391c7f8a4266\"\n        },\n        {\n            \"pppId\": \"5dcd842416d4391c7f8a4265\",\n            \"plant\": \"lúa\",\n            \"pest\": \"sâu cuốn lá\",\n            \"dosage\": \"200 - 300 ml/ha\",\n            \"phi\": \"7\",\n            \"usage\": \"Lượng nước phun 400 lít/ha. Phun thuốc khi sâu tuổi 1-2\",\n            \"created\": \"2019-11-14T16:43:16.900Z\",\n            \"_id\": \"5dcd842416d4391c7f8a4267\"\n        }\n    ],\n    \"registrationInfo\": {\n        \"pppId\": \"5dcd842416d4391c7f8a4265\",\n        \"registrationUnit\": \"Công ty TNHH MTV Lucky\",\n        \"registrationUnitAddress\": \"\",\n        \"manufacturer\": \"Hebei Yetian Agrochemicals Co., Ltd.\",\n        \"manufacturerAddress\": \"Xiyangling, East Circle Road, 2HD Shi Jia Zhuang City, Hebei, China.\",\n        \"created\": \"2019-11-14T16:43:16.900Z\",\n        \"_id\": \"5dcd842416d4391c7f8a4268\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Name-is-required",
            "description": "<p>Thiếu trường tên thuốc bvtv</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GHS-must-be-a-number",
            "description": "<p>Trường GHS phải là số</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WHO-must-be-a-number",
            "description": "<p>Trường WHO phải là số</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PHI-must-be-a-number",
            "description": "<p>Trường PHI phải là số</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thuốc bvtv tồn tại:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Thuốc bảo vệ thực vật với tên '\" + name + \"' đã tồn tại.\"\n}",
          "type": "json"
        },
        {
          "title": "Thiếu trường tên thuốc bvtv:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Vui lòng nhập tên thuốc bvtv\"\n}",
          "type": "json"
        },
        {
          "title": "Trường WHO phải là số:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Trường WHO phải là số\"\n}",
          "type": "json"
        },
        {
          "title": "Trường GHS phải là số:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Trường GHS phải là số\"\n}",
          "type": "json"
        },
        {
          "title": "Trường PHI phải là số:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Trường PHI phải là số\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "PlantProtectionProducts"
  },
  {
    "type": "delete",
    "url": "/api/plant-protection-products/",
    "title": "Delete plant protection product",
    "name": "DeletePlantProtectionProduct",
    "version": "1.0.0",
    "group": "PlantProtectionProducts",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/plant-protection-products?_id=5dd6527842d8944aa7cef4a1"
      },
      {
        "url": "http://localhost:3001/api/plant-protection-products?name=Abagold 55EC"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ten cua thuoc bao ve thuc vat</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"successMessage\": \"Xóa thuốc bảo vệ thực vật thành công\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"errorMessage\": \"Không tìm thấy thuốc bảo vệ thực vật\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "PlantProtectionProducts"
  },
  {
    "type": "get",
    "url": "/api/plant-protection-products",
    "title": "Get all plant protection products",
    "name": "GetAllPlantProtectionProducts",
    "group": "PlantProtectionProducts",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/plant-protection-products?pageNumber=9&nPerPage=20"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Số thứ tự trang cần lấy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nPerPage",
            "description": "<p>Số lượng thuốc bvtv trên mỗi trang</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalProducts",
            "description": "<p>Tổng số thuốc bvtv trong danh mục</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>Tổng số lượng trang</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activeIngredient",
            "description": "<p>Hoạt chất</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Hàm lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plantProtectionProductGroup",
            "description": "<p>Nhóm thuốc</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ghs",
            "description": "<p>Nhóm độc GHS</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "who",
            "description": "<p>Nhóm độc WHO</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "scopeOfUse",
            "description": "<p>Phạm vi sử dụng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plant",
            "description": "<p>Cây trồng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pest",
            "description": "<p>Dịch hại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dosage",
            "description": "<p>Liều lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phi",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>Cách dùng</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "registrationInfo",
            "description": "<p>Thông tin đăng ký</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registrationUnit",
            "description": "<p>Đơn vị đăng ký</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registrationUnitAddress",
            "description": "<p>Địa chỉ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Nhà sản xuất</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturerAddress",
            "description": "<p>Địa chi sản xuất</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "pppId",
            "description": "<p>ID của thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của thuốc bảo vệ thực vật || Phạm vi sử dụng || Thông tin đăng ký</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"totalProducts\": 6331,\n     \"totalPages\": 317,\n     \"data\": [\n         {\n             \"_id\": \"5dce66cb5c25ee6da0a29ac8\",\n             \"name\": \" Ababetter  3.6EC\",\n             \"activeIngredient\": \"Abamectin\",\n             \"content\": \"36g/l\",\n             \"plantProtectionProductGroup\": \"\",\n             \"ghs\": \"\",\n             \"who\": \"2\",\n             \"created\": \"2019-11-15T08:50:19.842Z\",\n             \"scopeOfUse\": [\n                 {\n                     \"_id\": \"5dce66cc5c25ee6da0a29ac9\",\n                     \"pppId\": \"5dce66cb5c25ee6da0a29ac8\",\n                     \"plant\": \"dưa hấu\",\n                     \"pest\": \"bọ trĩ\",\n                     \"dosage\": \"0.2 - 0.3 lít/ha\",\n                     \"phi\": \"7\",\n                     \"usage\": \"Lượng nước phun 400 lít/ha. Phun tkhi mật độ \\r\\nbọ trĩ  2-3 con/ ngọn\",\n                     \"created\": \"2019-11-15T08:50:20.100Z\"\n                 }\n             ],\n             \"registrationInfo\": {\n                 \"_id\": \"5dce66cc5c25ee6da0a29acd\",\n                 \"pppId\": \"5dce66cb5c25ee6da0a29ac8\",\n                 \"registrationUnit\": \"Công ty TNHH MTV Lucky\",\n                 \"registrationUnitAddress\": \"\",\n                 \"manufacturer\": \"Hebei Yetian Agrochemicals Co., Ltd.\",\n                 \"manufacturerAddress\": \"Xiyangling, East Circle Road, 2HD Shi Jia Zhuang City, Hebei, China.\",\n                 \"created\": \"2019-11-15T08:50:20.107Z\"\n             }\n         },\n         {\n             \"_id\": \"5dce66e25c25ee6da0a29ace\",\n             \"name\": \" Ababetter  5EC\",\n             \"activeIngredient\": \"Abamectin\",\n             \"content\": \"50g/l\",\n             \"plantProtectionProductGroup\": \"\",\n             \"ghs\": \"\",\n             \"who\": \"2\",\n             \"created\": \"2019-11-15T08:50:42.728Z\",\n             \"scopeOfUse\": [\n                 {\n                     \"_id\": \"5dce66e25c25ee6da0a29acf\",\n                     \"pppId\": \"5dce66e25c25ee6da0a29ace\",\n                     \"plant\": \"lúa\",\n                     \"pest\": \"sâu cuốn lá\",\n                     \"dosage\": \"150 - 250 ml/ha\",\n                     \"phi\": \"\",\n                     \"usage\": \"Lượng nước phun 400 lít/ha. Phun thuốc khi sâu tuổi 1-2\",\n                     \"created\": \"2019-11-15T08:50:42.728Z\"\n                 },\n                 {\n                     \"_id\": \"5dce66e25c25ee6da0a29ad0\",\n                     \"pppId\": \"5dce66e25c25ee6da0a29ace\",\n                     \"plant\": \"quýt\",\n                     \"pest\": \"nhện đỏ\",\n                     \"dosage\": \"0.0375 - 0.0625%\",\n                     \"phi\": \"\",\n                     \"usage\": \"Phun ướt đều plant khi mật độ khoảng \\r\\n5 - 6 con/ lá\",\n                     \"created\": \"2019-11-15T08:50:42.728Z\"\n                 }\n             ],\n             \"registrationInfo\": {\n                 \"_id\": \"5dce66e25c25ee6da0a29ad1\",\n                 \"pppId\": \"5dce66e25c25ee6da0a29ace\",\n                 \"registrationUnit\": \"Công ty TNHH MTV Lucky\",\n                 \"registrationUnitAddress\": \"\",\n                 \"manufacturer\": \"Hebei Yetian Agrochemicals Co., Ltd.\",\n                 \"manufacturerAddress\": \"Xiyangling, East Circle Road, 2HD Shi Jia Zhuang City, Hebei, China.\",\n                 \"created\": \"2019-11-15T08:50:42.728Z\"\n             }\n         }\n         ...\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"errorMessage\": \"Trang tìm kiếm không tồn tại\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "PlantProtectionProducts"
  },
  {
    "type": "get",
    "url": "/api/plant-protection-products",
    "title": "Get plant protection product by query",
    "name": "GetPlantProtectionProductByQuery",
    "version": "1.0.0",
    "group": "PlantProtectionProducts",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/plant-protection-products/query?_id=5dd6527842d8944aa7cef84e"
      },
      {
        "url": "http://localhost:3001/api/plant-protection-products/query?name=B52-usa 500EC"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên thuốc bảo vệ thực vật</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activeIngredient",
            "description": "<p>Hoạt chất</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Hàm lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plantProtectionProductGroup",
            "description": "<p>Nhóm thuốc</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ghs",
            "description": "<p>Nhóm độc GHS</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "who",
            "description": "<p>Nhóm độc WHO</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "scopeOfUse",
            "description": "<p>Phạm vi sử dụng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plant",
            "description": "<p>Cây trồng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pest",
            "description": "<p>Dịch hại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dosage",
            "description": "<p>Liều lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phi",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>Cách dùng</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "registrationInfo",
            "description": "<p>Thông tin đăng ký</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registrationUnit",
            "description": "<p>Đơn vị đăng ký</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registrationUnitAddress",
            "description": "<p>Địa chỉ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Nhà sản xuất</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturerAddress",
            "description": "<p>Địa chi sản xuất</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "pppId",
            "description": "<p>ID của thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của thuốc bảo vệ thực vật || Phạm vi sử dụng || Thông tin đăng ký</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n    \"name\": \" Ababetter 3.6EC\",\n    \"activeIngredient\": \"Abamectin\",\n    \"content\": \"36g/l\",\n    \"plantProtectionProductGroup\": \"Thuốc trừ sâu\",\n    \"ghs\": \"7\",\n    \"who\": \"6\",\n    \"created\": \"2019-11-14T16:43:16.899Z\",\n    \"_id\": \"5dcd842416d4391c7f8a4265\",\n    \"scopeOfUse\": [\n        {\n            \"pppId\": \"5dcd842416d4391c7f8a4265\",\n            \"plant\": \"dưa hấu\",\n            \"pest\": \"bọ trĩ\",\n            \"dosage\": \"0.2 - 0.3 lít/ha\",\n            \"phi\": \"7\",\n            \"usage\": \"Lượng nước phun 400 lít/ha. Phun tkhi mật độ \\r\\nbọ trĩ  2-3 con/ ngọn\",\n            \"created\": \"2019-11-14T16:43:16.900Z\",\n            \"_id\": \"5dcd842416d4391c7f8a4266\"\n        },\n        {\n            \"pppId\": \"5dcd842416d4391c7f8a4265\",\n            \"plant\": \"lúa\",\n            \"pest\": \"sâu cuốn lá\",\n            \"dosage\": \"200 - 300 ml/ha\",\n            \"phi\": \"7\",\n            \"usage\": \"Lượng nước phun 400 lít/ha. Phun thuốc khi sâu tuổi 1-2\",\n            \"created\": \"2019-11-14T16:43:16.900Z\",\n            \"_id\": \"5dcd842416d4391c7f8a4267\"\n        }\n    ],\n    \"registrationInfo\": {\n        \"pppId\": \"5dcd842416d4391c7f8a4265\",\n        \"registrationUnit\": \"Công ty TNHH MTV Lucky\",\n        \"registrationUnitAddress\": \"\",\n        \"manufacturer\": \"Hebei Yetian Agrochemicals Co., Ltd.\",\n        \"manufacturerAddress\": \"Xiyangling, East Circle Road, 2HD Shi Jia Zhuang City, Hebei, China.\",\n        \"created\": \"2019-11-14T16:43:16.900Z\",\n        \"_id\": \"5dcd842416d4391c7f8a4268\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"errorMessage\": \"Không tìm thấy thuốc bảo vệ thực vật\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "PlantProtectionProducts"
  },
  {
    "type": "patch",
    "url": "/api/plant-protection-products",
    "title": "Update plant protection product",
    "name": "UpdatePlantProtectionProduct",
    "version": "1.0.0",
    "group": "PlantProtectionProducts",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/plant-protection-products?_id=5df1d86fadb2472bffdde52c"
      },
      {
        "url": "http://localhost:3001/api/plant-protection-products?name=Alfatin 1.8EC"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activeIngredient",
            "description": "<p>Hoạt chất</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Hàm lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plantProtectionProductGroup",
            "description": "<p>Nhóm thuốc</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ghs",
            "description": "<p>Nhóm độc GHS</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "who",
            "description": "<p>Nhóm độc WHO</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "scopeOfUse",
            "description": "<p>Phạm vi sử dụng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plant",
            "description": "<p>Cây trồng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pest",
            "description": "<p>Dịch hại</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dosage",
            "description": "<p>Liều lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phi",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>Cách dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "registrationInfo",
            "description": "<p>Thông tin đăng ký</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registrationUnit",
            "description": "<p>Đơn vị đăng ký</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registrationUnitAddress",
            "description": "<p>Địa chỉ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Nhà sản xuất</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturerAddress",
            "description": "<p>Địa chi sản xuất</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Update JSON example",
          "content": "{\n      \"name\": \"updated\",\n      \"activeIngredient\": \"updated\",\n      \"content\": \"updated\",\n      \"plantProtectionProductGroup\": \"updated\",\n      \"ghs\": \"20\",\n      \"who\": \"20\",\n      \"scopeOfUse\": [\n          {\n              \"_id\": \"5df1d870adb2472bffde2f09\",\n              \"pppId\": \"5df1d86fadb2472bffdde52c\",\n              \"plant\": \"updated\",\n              \"pest\": \"updated\",\n              \"dosage\": \"updated\",\n              \"phi\": \"9\",\n              \"usage\": \"updated\"\n          },\n          {\n              \"_id\": \"5df1d870adb2472bffde2f0a\",\n              \"pppId\": \"5df1d86fadb2472bffdde52c\",\n              \"plant\": \"updated\",\n              \"pest\": \"updated\",\n              \"dosage\": \"updated\",\n              \"phi\": \"9\",\n              \"usage\": \"updated\"\n          }\n      ],\n      \"registrationInfo\": {\n          \"_id\": \"5df1d870adb2472bffde2f0b\",\n          \"pppId\": \"5df1d86fadb2472bffdde52c\",\n          \"registrationUnit\": \"updated\",\n          \"registrationUnitAddress\": \"updated\",\n          \"manufacturer\": \"updated\",\n          \"manufacturerAddress\": \"updated\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activeIngredient",
            "description": "<p>Hoạt chất</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Hàm lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plantProtectionProductGroup",
            "description": "<p>Nhóm thuốc</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ghs",
            "description": "<p>Nhóm độc GHS</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "who",
            "description": "<p>Nhóm độc WHO</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "scopeOfUse",
            "description": "<p>Phạm vi sử dụng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plant",
            "description": "<p>Cây trồng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pest",
            "description": "<p>Dịch hại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dosage",
            "description": "<p>Liều lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phi",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>Cách dùng</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "registrationInfo",
            "description": "<p>Thông tin đăng ký</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registrationUnit",
            "description": "<p>Đơn vị đăng ký</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registrationUnitAddress",
            "description": "<p>Địa chỉ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Nhà sản xuất</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturerAddress",
            "description": "<p>Địa chi sản xuất</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "pppId",
            "description": "<p>ID của thuốc bảo vệ thực vật</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>ID của thuốc bảo vệ thực vật || Phạm vi sử dụng || Thông tin đăng ký</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n    \"_id\": \"5df1d86fadb2472bffdde52c\",\n    \"name\": \"updated\",\n    \"activeIngredient\": \"updated\",\n    \"content\": \"updated\",\n    \"plantProtectionProductGroup\": \"updated\",\n    \"ghs\": \"20\",\n    \"who\": \"20\",\n    \"created\": \"2019-12-12T06:04:31.587Z\",\n    \"scopeOfUse\": [\n        {\n            \"_id\": \"5df1d870adb2472bffde2f09\",\n            \"pppId\": \"5df1d86fadb2472bffdde52c\",\n            \"plant\": \"updated\",\n            \"pest\": \"updated\",\n            \"dosage\": \"updated\",\n            \"phi\": \"9\",\n            \"usage\": \"updated\",\n            \"created\": \"2019-12-12T06:04:32.858Z\"\n        },\n        {\n            \"_id\": \"5df1d870adb2472bffde2f0a\",\n            \"pppId\": \"5df1d86fadb2472bffdde52c\",\n            \"plant\": \"updated\",\n            \"pest\": \"updated\",\n            \"dosage\": \"updated\",\n            \"phi\": \"9\",\n            \"usage\": \"updated\",\n            \"created\": \"2019-12-12T06:04:32.858Z\"\n        }\n    ],\n    \"registrationInfo\": {\n        \"_id\": \"5df1d870adb2472bffde2f0b\",\n        \"pppId\": \"5df1d86fadb2472bffdde52c\",\n        \"registrationUnit\": \"updated\",\n        \"registrationUnitAddress\": \"updated\",\n        \"manufacturer\": \"updated\",\n        \"manufacturerAddress\": \"updated\",\n        \"created\": \"2019-12-12T06:04:32.858Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"errorMessage\": \"Không tìm thấy thuốc bảo vệ thực vật phù hợp!\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "PlantProtectionProducts"
  },
  {
    "type": "post",
    "url": "/resources",
    "title": "Them resource can quan ly quyen",
    "version": "1.0.0",
    "name": "PostResource",
    "group": "Resource",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/resources"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ten resource can quan ly</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>Danh sach role cho nguoi dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role.user",
            "description": "<p>Ki hieu quyen cho nguoi dung la user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role.manager",
            "description": "<p>Ki hieu quyen cho nguoi dung la manager</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role.administrator",
            "description": "<p>Ki hieu quyen cho nguoi dung la administrator</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\":\"user\",\n    \"role\":{\n        \"user\":\"G\",\n        \"manager\":\"GU\",\n        \"administrator\":\"GUDP\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ten resource da quan ly.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>danh sach role doi voi tung loai nguoi dung.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.user",
            "description": "<p>Ki hieu quyen cho nguoi dung la user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.manager",
            "description": "<p>Ki hieu quyen cho nguoi dung la manager</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.administrator",
            "description": "<p>Ki hieu quyen cho nguoi dung la administrator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>ngay them moi resource</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id cua resource</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"name\": \"main\",\n        \"role\": {\n            \"user\": \"\",\n            \"manager\": \"G\",\n            \"administrator\": \"GPUD\"\n        },\n        \"created\": \"2019-11-14T07:39:33.888Z\",\n        \"_id\": \"5dcd04b5e99a6d1c435e6ff1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Resource-already-exist",
            "description": "<p>resource da ton tai</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"resource already exist\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Resource"
  },
  {
    "type": "post",
    "url": "/roles",
    "title": "Them phuong thuc moi",
    "version": "1.0.0",
    "name": "PostRole",
    "group": "Role",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/roles"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "char(1)",
            "optional": false,
            "field": "_id",
            "description": "<p>Ki hieu cua method</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "permission",
            "description": "<p>Ten method</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"_id\":\"D\",\n    \"method\":\"DELETE\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ki hieu cua method</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "permission",
            "description": "<p>Ten method</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Ngay them vao database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"D\",\n        \"method\": \"DELETE\",\n        \"created\": \"2019-11-14T07:10:50.507Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error-creating-new-role",
            "description": "<p>Thong tin tao moi sai</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"error creating new role\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/subcontractors",
    "title": "Create new subcontractor",
    "name": "CreateNewSubcontractor",
    "version": "1.0.0",
    "group": "Subcontractors",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/subcontractors"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên nhà thầu phụ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceProvided",
            "description": "<p>Dịch vụ cung cấp</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "hireDate",
            "description": "<p>Ngày thuê (ISO 8601 format)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Chi phí thuê</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantityEmployee",
            "description": "<p>Số lượng lao động tham gia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"name\": \"tmk\",\n    \"serviceProvided\": \"May cat lua\",\n    \"hiredDate\": \"2019-12-12\",\n    \"cost\": \"9000000\",\n    \"quantityEmployee\": \"20\",\n    \"note\": \"Something for note\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên nhà thầu phụ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceProvided",
            "description": "<p>Dịch vụ cung cấp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "hireDate",
            "description": "<p>Ngày thuê (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Chi phí thuê</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantityEmployee",
            "description": "<p>Số lượng lao động tham gia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n\n{\n    \"name\": \"tmk\",\n    \"serviceProvided\": \"May cat lua\",\n    \"hiredDate\": \"2019-12-12\",\n    \"cost\": \"9000000\",\n    \"quantityEmployee\": \"20\",\n    \"note\": \"Something for note\",\n    \"_id\": \"5e0accdaf7cd082ea2431756\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "name-is-required",
            "description": "<p>Trường tên nhà thầu phụ là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "serviceProvided-is-required",
            "description": "<p>Trường dịch vụ cung cấp là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "hiredDate-is-ISO8061-format",
            "description": "<p>Ngày thuê phải là định dạng ISO 8601</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cost-is-positive-number",
            "description": "<p>Tiền thuê phải là số dương</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "quantityEmployee-is-positive-integer",
            "description": "<p>Số lượng lao động tham gia phải là số nguyên dương</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "name is required:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Vui lòng nhập tên nhà thầu phụ\"\n}",
          "type": "json"
        },
        {
          "title": "cost is positive number:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Tiền thuê phải là số dương\"\n}",
          "type": "json"
        },
        {
          "title": "hiredDate is ISO 8601:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Ngày thuê không hợp lệ\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Subcontractors"
  },
  {
    "type": "get",
    "url": "/subcontractors",
    "title": "Get all subcontractors",
    "name": "GetAllSubcontractors",
    "version": "1.0.0",
    "group": "Subcontractors",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/subcontractors?pageNumber=1&nPerPage=20"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Số thứ tự trang cần lấy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nPerPage",
            "description": "<p>Số lượng sản phẩm trên mỗi trang</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalSubcontractors",
            "description": "<p>Tổng số document quản lý công cụ, dụng cụ</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>Tổng số lượng trang</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên nhà thầu phụ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceProvided",
            "description": "<p>Dịch vụ cung cấp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "hireDate",
            "description": "<p>Ngày thuê (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Chi phí thuê</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantityEmployee",
            "description": "<p>Số lượng lao động tham gia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n\n{\n    \"totalGoodsIssues\": 2,\n    \"totalPages\": 1,\n    \"data\": [\n        {\n            \"_id\": \"5e0acc45b1c82b2dbb7a0fcc\",\n            \"name\": \"tmk\",\n            \"serviceProvided\": \"May cat lua\",\n            \"hiredDate\": \"2019-12-12\",\n            \"cost\": \"9000000\",\n            \"quantityEmployee\": \"200\",\n            \"note\": null\n        },\n        {\n            \"_id\": \"5e0acc7406c7a42e3a31d3a6\",\n            \"name\": \"tmk\",\n            \"serviceProvided\": \"May cat lua\",\n            \"hiredDate\": \"2019-12-12\",\n            \"cost\": \"5000.500\",\n            \"quantityEmployee\": \"200\",\n            \"note\": null\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Page-not-found",
            "description": "<p>Trang không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Page not found:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"errorMessage\": \"Trang tìm kiếm không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Subcontractors"
  },
  {
    "type": "get",
    "url": "/subcontractors/:id",
    "title": "Get subcontractor by id",
    "name": "GetSubcontractorById",
    "version": "1.0.0",
    "group": "Subcontractors",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/subcontractors/5e0aac96e69e031c5fca8c8b"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên nhà thầu phụ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceProvided",
            "description": "<p>Dịch vụ cung cấp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "hireDate",
            "description": "<p>Ngày thuê (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Chi phí thuê</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantityEmployee",
            "description": "<p>Số lượng lao động tham gia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n\n{\n    \"_id\": \"5e0acc45b1c82b2dbb7a0fcc\",\n    \"name\": \"tmk\",\n    \"serviceProvided\": \"May cat lua\",\n    \"hiredDate\": \"2019-12-12\",\n    \"cost\": \"9000000\",\n    \"quantityEmployee\": \"200\",\n    \"note\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Subcontractor-not-found",
            "description": "<p>Document không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Subcontractor not found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"Document không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Subcontractors"
  },
  {
    "type": "delete",
    "url": "/subcontractors/:id",
    "title": "Update subcontractor by id",
    "name": "UpdateSubcontractorById",
    "version": "1.0.0",
    "group": "Subcontractors",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/subcontractors/5e09757502716412c0b026d7"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"successMessage\": \"Document nhà thầu phụ đã được xóa thành công\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Subcontractor-not-found",
            "description": "<p>Document không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Subcontractor not found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"Document không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Subcontractors"
  },
  {
    "type": "patch",
    "url": "/subcontractors",
    "title": "Update subcontractor by id",
    "name": "updateSubcontractorById",
    "version": "1.0.0",
    "group": "Subcontractors",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/subcontractors/5e0accdaf7cd082ea2431756"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên nhà thầu phụ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceProvided",
            "description": "<p>Dịch vụ cung cấp</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "hireDate",
            "description": "<p>Ngày thuê (ISO 8601 format)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Chi phí thuê</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantityEmployee",
            "description": "<p>Số lượng lao động tham gia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"name\": \"updated\",\n    \"serviceProvided\": \"updated\",\n    \"hiredDate\": \"2019-01-01\",\n    \"cost\": \"99999\",\n    \"quantityEmployee\": \"999999\",\n    \"note\": \"updated\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên nhà thầu phụ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceProvided",
            "description": "<p>Dịch vụ cung cấp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "hireDate",
            "description": "<p>Ngày thuê (ISO 8601 format)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Chi phí thuê</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantityEmployee",
            "description": "<p>Số lượng lao động tham gia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"_id\": \"5e0acc7406c7a42e3a31d3a6\",\n    \"name\": \"updated\",\n    \"serviceProvided\": \"updated\",\n    \"hiredDate\": \"2019-01-01\",\n    \"cost\": \"99999\",\n    \"quantityEmployee\": \"999999\",\n    \"note\": \"updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "hiredDate-is-ISO8061-format",
            "description": "<p>Ngày thuê phải là định dạng ISO 8601</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cost-is-positive-number",
            "description": "<p>Tiền thuê phải là số dương</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "quantityEmployee-is-positive-integer",
            "description": "<p>Số lượng lao động tham gia phải là số nguyên dương</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "cost is positive number:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Tiền thuê phải là số dương\"\n}",
          "type": "json"
        },
        {
          "title": "hiredDate is ISO 8601:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Ngày thuê không hợp lệ\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Subcontractors"
  },
  {
    "type": "post",
    "url": "/refresh_token",
    "title": "Xac thuc lay access token moi",
    "version": "1.0.0",
    "name": "PostToken",
    "group": "Token",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/refresh_token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>refresh token cua nguoi dung</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"refresh_token\": \"fsfsdhfwrtwjf34yrwi4rjfweoifhefjwpuwfseo.oiehskdlwhwsfoiwdfsj3ljdnvkjdbfwoh\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>refresh token moi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>access token moi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"refresh_token\": \"fsjdoiwukmvwafojf9wa4rrjirhfelkfsarwjijgerhggjh8reighoighergelrgsfhg\",\n    \"token\": \"sdfhwefdfbnbvsuerisbcfuhriufbwfjbskfheiurhkjfiurtherwgfkjsdhfsg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Verify-JWT-token-failed",
            "description": "<p>refresh token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Request-without-refresh-token",
            "description": "<p>Khong tim thay refresh token tren request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Request without refresh token\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "Token"
  },
  {
    "type": "post",
    "url": "/api/tools",
    "title": "Create new tool",
    "name": "CreateNewTool",
    "group": "Tools",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/tools",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên công cụ, dụng cụ (vật liệu y tế, bao, đồ bảo hộ lao động,... )</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Tổng số lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Số lượng còn lượng trong kho</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"name\": \"Dụng cụ y tế\",\n    \"total\": \"50\",\n    \"cooperativeId\": \"HTXUMH3\",\n    \"image\": file\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên công cụ, dụng cụ (vật liệu y tế, bao, đồ bảo hộ lao động,... )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Tổng số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Số lượng còn lượng trong kho</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n\n{\n    \"name\": \"Dụng cụ y tế\",\n    \"total\": \"9\",\n    \"available\": \"9\",\n    \"image\": \"http://localhost:3001/tool/image-1584776076120.jpeg\",\n    \"note\": \"Something\",\n    \"cooperativeId\": \"HTXUMH3\",\n    \"_id\": \"5e75c38c40019a40362038ff\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "name-is-required",
            "description": "<p>Trường tên dụng cụ là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "total-is-required",
            "description": "<p>Tổng số lượng là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "total-is-positive-integer",
            "description": "<p>Tổng số lượng phải là số nguyên dương</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cooperativeId-is-required",
            "description": "<p>Tổng cooperativeId là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cooperative-doesnt-exist",
            "description": "<p>Hợp tác xã không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "total-must-be-positive-number:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Tổng số lượng phải là số nguyên dương\"\n}",
          "type": "json"
        },
        {
          "title": "total is required:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Vui lòng nhập tổng số lượng\"\n}",
          "type": "json"
        },
        {
          "title": "cooperative does not exist:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Hợp tác xã không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/tool.router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "delete",
    "url": "/tools/:id",
    "title": "Delete document tool by id",
    "name": "DeleteToolById",
    "group": "Tools",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/tools/5e09757502716412c0b026d7",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"successMessage\": \"Dụng cụ được xóa thành công\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Tool-not-found",
            "description": "<p>Dụng cụ không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Tool not found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"Dụng cụ với id = ${id} không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/tool.router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools",
    "title": "Get all tools",
    "name": "GetAllTools",
    "group": "Tools",
    "examples": [
      {
        "title": "Get All Tools Management with paginating:",
        "content": "curl -i http://localhost:3001/api/tools?pageNumber=1&nPerPage=20",
        "type": "curl"
      },
      {
        "title": "Get All Tools Management with paginating and specific cooperativeId:",
        "content": "curl -i http://localhost:3001/api/tools?pageNumber=1&nPerPage=20&cooperativeId=HTXUMH3",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Số thứ tự trang cần lấy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nPerPage",
            "description": "<p>Số lượng sản phẩm trên mỗi trang</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalTools",
            "description": "<p>Tổng số document quản lý công cụ, dụng cụ</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>Tổng số lượng trang</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên công cụ, dụng cụ (vật liệu y tế, bao, đồ bảo hộ lao động,... )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Tổng số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Số lượng còn lượng trong kho</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n\n{\n     \"totalTools\": 2,\n     \"totalPages\": 1,\n     \"data\": [\n         {\n         \"_id\": \"5e75bc7fe5350edcf2e3276d\",\n         \"name\": \"Dụng cụ y tế\",\n         \"total\": \"50\",\n         \"available\": \"50\",\n         \"image\": \"http://localhost:3001/tool/image-1584774271059.jpeg\",\n         \"note\": null,\n         \"cooperativeId\": \"HTXUMH3\"\n         },\n         {\n             \"_id\": \"5e75bc94f732ebde34895eb0\",\n             \"name\": \"Bao lúa\",\n             \"total\": \"500\",\n             \"available\": \"99\",\n             \"image\": \"http://localhost:3001/tool/image-1584774292496.jpeg\",\n             \"note\": null,\n             \"cooperativeId\": \"HTXUMH3\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Page-not-found",
            "description": "<p>Trang không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Page not found:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"errorMessage\": \"Trang tìm kiếm không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/tool.router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/:id",
    "title": "Get tool by id",
    "name": "GetToolsById",
    "group": "Tools",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/tools/5e0aac96e69e031c5fca8c8b",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên công cụ, dụng cụ (vật liệu y tế, bao, đồ bảo hộ lao động,... )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Tổng số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Số lượng còn lượng trong kho</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n\n{\n    \"name\": \"Dụng cụ y tế\",\n    \"total\": \"9\",\n    \"available\": \"9\",\n    \"image\": \"http://localhost:3001/tool/image-1584776076120.jpeg\",\n    \"note\": \"Something\",\n    \"cooperativeId\": \"HTXUMH3\",\n    \"_id\": \"5e75c38c40019a40362038ff\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Tool-is-not-found",
            "description": "<p>Dụng cụ không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Tool not found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"Dụng cụ không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/tool.router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "patch",
    "url": "/api/tools/:id",
    "title": "Update tool",
    "name": "UpdateTool",
    "group": "Tools",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/tools/5e0ab067f1ec331e994c6891",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên công cụ, dụng cụ (vật liệu y tế, bao, đồ bảo hộ lao động,... )</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Tổng số lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Số lượng còn lượng trong kho</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image file</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"name\": \"updated\",\n    \"total\": \"999\",\n    \"available\": \"999\",\n    \"cooperativeId\": \"HTXNN\",\n    \"image\": file\n    \"note\": \"updated\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên công cụ, dụng cụ (vật liệu y tế, bao, đồ bảo hộ lao động,... )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Tổng số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Số lượng còn lượng trong kho</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"_id\": \"5e0ab067f1ec331e994c6891\",\n    \"name\": \"updated\",\n    \"total\": \"999\",\n    \"available\": \"999\",\n    \"cooperativeId\": \"HTXNN\",\n    \"image: \"http://localhost:3001/tool/image-1584774271059.jpeg\"\n    \"note\": \"updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "total-is-positive-integer",
            "description": "<p>Số lượng phải là số nguyên dương</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "name-exists",
            "description": "<p>Tên dụng cụ đã tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "wrong-image-extension",
            "description": "<p>Định dạng hình ảnh không phù hợp</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "cooperative-doesnt-exist",
            "description": "<p>Hợp tác xã không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "total is positive number:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Tổng số lượng phải là số nguyên dương\"\n}",
          "type": "json"
        },
        {
          "title": "name exists:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Dụng cụ với tên \" + name + \" đã tồn tại\"\n}",
          "type": "json"
        },
        {
          "title": "issuedDate is ISO 8601:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"errorMessage\": \"Ngày xuất kho không hợp lệ\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/tool.router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Get user info from token",
    "version": "1.0.0",
    "name": "CheckToken",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/users/me"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Ngay tao token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Thong tin cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>ID cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Ten cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.personalId",
            "description": "<p>So CMND cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.address",
            "description": "<p>Địa chỉ cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phone",
            "description": "<p>So dien thoai cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Địa chỉ email cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user",
            "description": "<p>Loai nguoi dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.HTXId",
            "description": "<p>ID cua hop tac xa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.created",
            "description": "<p>ngay tao account cua user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5dca9992d683f81b09183344\",\n    \"created\": \"2019-11-12T11:37:54.687Z\",\n    \"user\": {\n        \"_id\": \"5dca995fd683f81b09183342\",\n        \"name\": \"Nguyen Quang Khai\",\n        \"personalId\": \"381823821\",\n        \"address\": \"14/132, 3/2 street, Ninh Kieu, Can Tho\",\n        \"phone\": \"0836810112\",\n        \"email\": \"vanloi10c@gmail.com\",\n        \"user\": \"manager\",\n        \"HTXId\": \"115\"\n    },\n        \"created\": \"2019-11-12T11:37:03.461Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access-dinied",
            "description": "<p>Token khong hop le</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Access dinied\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create new user",
    "version": "1.0.0",
    "name": "CreateUser",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ten nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ảnh đại diện của user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>So CMND cua nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ cua nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>So dien thoai cua nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email cua nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Chuc vu cua nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>ID cua hop tac xa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mat khau cua nguoi su dung</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Nguyen Van Loi\",\n  \"avatar\": file,\n  \"personalId\":\"384736273\",\n  \"address\": \"Ninh Kieu, Can Tho\",\n  \"phone\": \"093827463\",\n  \"email\": \"admin@gmail.com\",\n  \"user\": \"user\",\n  \"HTXId\": \"dowidnfjd\",\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ten nguoi su dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Ten file avatar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>So CMND cua nguoi su dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>So dien thoai cua nguoi su dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email cua nguoi su dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Chuc vu cua nguoi su dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>ID cua hop tac xa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Thoi gian nguoi dung duoc tao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID cua nguoi su dung</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"name\": \"Nguyen Quang Khai\",\n    \"avatar\": \"http://localhost:3003/image-1576222546040.png\",\n    \"personalId\": \"381823821\",\n    \"address\": \"14/132, 3/2 street, Ninh Kieu, Can Tho\",\n    \"email\": \"vanloi10c@gmail.com\",\n    \"user\": \"user\",\n    \"HTXId\": \"115\",\n    \"created\": \"2019-11-12T12:13:24.216Z\",\n    \"_id\": \"5dcaa1e4e363dc1df58f0317\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Name-is-required",
            "description": "<p>Thieu truong ten nguoi dung</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Personal-id-is-invalid",
            "description": "<p>So CMND sai</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Phone-number-already-exist",
            "description": "<p>Nguoi dung da ton tai trong CSDL</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Phone-number-is-reqired",
            "description": "<p>Thieu SDT</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Passsword-is-required-and-more-than-3-characters",
            "description": "<p>Khong co ma khau hoac mat khau qua ngan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Phone number already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:userId",
    "title": "Get user info from id",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/users/all"
      },
      {
        "url": "http://localhost:3001/api/users/fsdlkfjsdoeijfsdlsdfj"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID hoac gia tri &quot;all&quot; voi yeu cau tat ca user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ten cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>So CMND cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>So dien thoai cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Loai nguoi dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>ID cua hop tac xa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>ngay tao account cua user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"5dc7c9fbeae2ba2a92117f4c\",\n        \"name\": \"Nguyen Van Loi\",\n        \"personalId\": \"381823821\",\n        \"address\": \"14/132, 3/2 street, Ninh Kieu, Can Tho\",\n        \"phone\": \"0836810223\",\n        \"email\": \"vanloi10c@gmail.com\",\n        \"user\": \"user\",\n        \"HTXId\": \"115\",\n        \"password\": \"$2b$10$tLavRp8.KFIcD8Rk4BBn7eR1qtfzBJsM6kUcNEyB5N.fLfZldXPoi\",\n        \"created\": \"2019-11-10T08:27:39.377Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-ID-is-invalid",
            "description": "<p>User Id khong dung</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Users-are-not-found",
            "description": "<p>Khong tim thay nguoi dung</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"Access denied\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Login user",
    "version": "1.0.0",
    "name": "LoginUser",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/login"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>So dien thoai cua nguoi su dung</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mat khau cua nguoi su dung</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"phone\": \"0847362182\",\n  \"password\":\"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Ngay login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e\n    yJfaWQiOiI1ZGQ2YTVjMWEwYWJkYTcwZmQ2YmZjYzkiLCJuYW\n    1lIjoiTmd1eWVuIHZhbiBsb2kiLCJwZXJzb25hbElkIjoiNDc\n    zNzI2MzcyMiIsImFkZHJlc3MiOiIiLCJwaG9uZSI6IjA4NDcz\n    ODE5MjIxIiwiZW1haWwiOiJsb2lAZ21haWwuY29tIiwidXNlci\n    I6InVzZXIiLCJIVFhJZCI6bnVsbCwicGFzc3dvcmQiOiIkMmI\n    kMTAkVE51bm1UR3poV2FhLjZtOUtSU1Z3LnBTU2JHT284RHZC\n    b3JZZFdZMWJXUmZXQnNiZ1BhTlMiLCJjcmVhdGVkIjoiMjAxO\n    S0xMS0yMVQxNDo1NzowNS4yMDBaIiwiaWF0IjoxNTc0MzQ4Mj\n    g5LCJleHAiOjE1NzQzNDgzNDl9.JeuNFsCBVC30Glz5YsBTb3\n    GzaqwdTfApwrLYIKxWrMU\",\n    \"refreshToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX\n    VCJ9.eyJfaWQiOiI1ZGQ2YTVjMWEwYWJkYTcwZmQ2YmZjYzki\n    LCJuYW1lIjoiTmd1eWVuIHZhbiBsb2kiLCJwZXJzb25hbElkI\n    joiNDczNzI2MzcyMiIsImFkZHJlc3MiOiIiLCJwaG9uZSI6Ij\n    A4NDczODE5MjIxIiwiZW1haWwiOiJsb2lAZ21haWwuY29tIiw\n    idXNlciI6InVzZXIiLCJIVFhJZCI6bnVsbCwicGFzc3dvcmQi\n    OiIkMmIkMTAkVE51bm1UR3poV2FhLjZtOUtSU1Z3LnBTU2JHT\n    284RHZCb3JZZFdZMWJXUmZXQnNiZ1BhTlMiLCJjcmVhdGVkIj\n    oiMjAxOS0xMS0yMVQxNDo1NzowNS4yMDBaIiwiaWF0IjoxNTc\n    0MzQ4Mjg5LCJleHAiOjE1NzQzNDg0MDl9.VZKH4yNpTsH0Umi\n    lLNUI45rtsA3QvuiRAy8UHRav__A\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Phone-and-password-are-required",
            "description": "<p>Thieu SDT hoac mat khau</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-is-not-found",
            "description": "<p>Khong tim thay nguoi su dung</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Wrong-password",
            "description": "<p>Sai mat khau</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Password is wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/users",
    "title": "Update users info",
    "version": "1.0.0",
    "name": "PatchUsers",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Query",
            "description": "<p>Bo Loc danh sach nguoi dung cho viec update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Query.Params",
            "description": "<p>Danh sach thuoc tinh cua bo loc. VD: name, _id, phone, address</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "update",
            "description": "<p>Thong tin can update</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "update.set",
            "description": "<p>Tap hop cac thuoc tinh can update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "update.set.Params",
            "description": "<p>Danh sach thuoc tinh can update. VD: name, address, _id,...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"query\":{\n        \"name\":\"Nguyen Van Loi\"\n    },\n    \"update\":{\n        \"$set\":{\n            \"HTXfdId\": \"116\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<p>So luong du lieu da cap nhat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"nModified\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Permission-denied",
            "description": "<p>Token khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-id-is-invalid-in-query-block",
            "description": "<p>User Id khong hop le</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Nothing-to-update",
            "description": "<p>Query sai hoac du lieu update da ton tai trong database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n      \"error\": \"Nothing to update\"\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "manager-admin"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/search",
    "title": "Search user by name",
    "version": "1.0.0",
    "name": "SearchUser",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/users/search?keywords=nguyen van loi&pageNumber=1&resultNumber=1"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>Searching keywords</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resultNumber",
            "description": "<p>Result Number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Ngay tao token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ten cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User avatar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personalId",
            "description": "<p>So CMND cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>So dien thoai cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email cua user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Loai nguoi dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "HTXId",
            "description": "<p>ID cua hop tac xa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n        {\n            \"_id\": \"5e1c79058413720653b09112\",\n            \"name\": \"Nguyen Van Loi\",\n            \"avatar\": \"http://localhost:3001/avatar/default.png\",\n            \"personalId\": \"381823993\",\n            \"address\": \"Can Tho\",\n            \"phone\": \"0836810994\",\n            \"email\": \"vanloi1010@gmail.com\",\n            \"user\": \"user\",\n            \"HTXId\": \"UM1\",\n            \"created\": \"2020-01-13T14:04:53.771Z\"\n        }\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access-dinied",
            "description": "<p>Token khong hop le</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Access dinied\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "./router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/warehouses",
    "title": "Create new warehouse document",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/warehouses/"
      }
    ],
    "name": "CreateNewWarehouse",
    "group": "Warehouses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "productId",
            "description": "<p>Id của sản phẩm (có thể là id của Thuốc bvtv hoặc Phân bón hoặc Giống)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Giá sản phẩm</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patchCode",
            "description": "<p>Mã số lô</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n {\n     \"productId\": \"5e78640e10fb091ae3b8ca7f\",\n\t    \"price\": \"900000\",\n\t    \"productType\": \"Thuốc bvtv\",\n\t    \"quantity\": \"99\",\n\t    \"goodsReceiptId\": \"5e78969830f3a00b8ed4b116\",\n\t    \"cooperativeId\": \"HTXUMH3\",\n\t    \"patchCode\": \"test12345\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "productId",
            "description": "<p>Id của sản phẩm (có thể là id của Thuốc bvtv hoặc Phân bón hoặc Giống)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Giá sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patchCode",
            "description": "<p>Mã số lô</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n\n {\n     \"productId\": \"5e78640e10fb091ae3b8ca7f\",\n\t    \"price\": \"900000\",\n\t    \"productType\": \"Thuốc bvtv\",\n\t    \"quantity\": \"99\",\n\t    \"goodsReceiptId\": \"5e78969830f3a00b8ed4b116\",\n\t    \"cooperativeId\": \"HTXUMH3\",\n\t    \"patchCode\": \"test12345\"\n     \"_id\": \"5e106cf39a2d430f0fda2557\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productType-is-required",
            "description": "<p>Trường loại sản phẩm là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productType-does-not-exist",
            "description": "<p>Trường loại sản phẩm không tồn tại (Loại sp phải là &quot;Thuốc bvtv&quot; || &quot;Phân bón&quot; || &quot;Giống&quot;)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productId-is-required",
            "description": "<p>Trường id sản phẩm là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "quantity-is-required",
            "description": "<p>Số lượng là bắt buộc</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "quantity-is-positive-integer",
            "description": "<p>Số lượng phải là số nguyên dương</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productId-does-not-exist",
            "description": "<p>Sản phẩm không tồn tại trong danh mục</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productId-is-invalid",
            "description": "<p>Id sản phẩm không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "goodsReceiptId-does-not-exist",
            "description": "<p>Hóa đơn nhập không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "goodsReceiptId-is-invalid",
            "description": "<p>Id hóa đơn nhập không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "productType is required:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Vui lòng nhập loại sản phẩm\"\n}",
          "type": "json"
        },
        {
          "title": "productType does not exist:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Loại sản phẩm không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/warehouse.router.js",
    "groupTitle": "Warehouses"
  },
  {
    "type": "delete",
    "url": "/api/warehouses/:id",
    "title": "Delete Warehouse Doc",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/warehouses/5e10733dca9ed4129c70715c"
      }
    ],
    "group": "Warehouses",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"successMessage\": \"Document kho thuốc đã được xóa thành công\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Warehouse-document-not-found",
            "description": "<p>Document không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-id",
            "description": "<p>Id không hợp lệ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid id:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"errorMessage\": \"Id không hợp lệ\"\n}",
          "type": "json"
        },
        {
          "title": "Warehouse not found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"Document không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/warehouse.router.js",
    "groupTitle": "Warehouses",
    "name": "DeleteApiWarehousesId"
  },
  {
    "type": "get",
    "url": "/api/warehouses",
    "title": "Get All Warehouse Doc",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/warehouses/"
      }
    ],
    "name": "GetAllWarehouseDocs",
    "group": "Warehouses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Số thứ tự trang cần lấy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nPerPage",
            "description": "<p>Số lượng document kho thuốc trên mỗi trang</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalSubcontractors",
            "description": "<p>Tổng số document kho thuốc trong kho</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>Tổng số lượng trang</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "productName",
            "description": "<p>Tên của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patchCode",
            "description": "<p>Số lô</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"totalWarehouses\": 2,\n    \"totalPages\": 1,\n    \"data\": [\n        {\n            \"_id\": \"5e106cf39a2d430f0fda2557\",\n            \"productName\": \"Ababetter 1.8EC\",\n            \"productType\": \"Thuốc bvtv\",\n            \"quantity\": \"100\",\n            \"goodsReceiptId\": \"1234567890\",\n            \"patchCode\": \"1234567890\"\n        },\n        {\n            \"_id\": \"5e1075d453adfe17f413a130\",\n            \"productName\": \"Abagold 55EC\",\n            \"productType\": \"Thuốc bvtv\",\n            \"quantity\": \"9\",\n            \"goodsReceiptId\": \"5e10733dca9ed4129c70715c\",\n            \"patchCode\": \"1234567890\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/v1/warehouse.router.js",
    "groupTitle": "Warehouses"
  },
  {
    "type": "get",
    "url": "/api/warehouses/:id",
    "title": "Get Single Warehouse Doc",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/warehouses/5e10733dca9ed4129c70715c"
      }
    ],
    "name": "GetWarehouseDoc",
    "group": "Warehouses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "productName",
            "description": "<p>Tên của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patchCode",
            "description": "<p>Số lô</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"totalWarehouses\": 2,\n    \"totalPages\": 1,\n    \"data\": [\n        {\n            \"_id\": \"5e106cf39a2d430f0fda2557\",\n            \"productName\": \"Ababetter 1.8EC\",\n            \"productType\": \"Thuốc bvtv\",\n            \"quantity\": \"100\",\n            \"goodsReceiptId\": \"1234567890\",\n            \"patchCode\": \"1234567890\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/v1/warehouse.router.js",
    "groupTitle": "Warehouses"
  },
  {
    "type": "patch",
    "url": "/api/warehouses/:id",
    "title": "Update Warehouse Doc",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/warehouses/5e10733dca9ed4129c70715c"
      }
    ],
    "name": "UpdateWarehouseById",
    "group": "Warehouses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "productId",
            "description": "<p>Id của sản phẩm (có thể là id của Thuốc bvtv hoặc Phân bón hoặc Giống)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Giá sản phẩm</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patchCode",
            "description": "<p>Mã số lô</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"productId\": \"5e057818a1c1111795e29b75\",\n    \"productType\": \"Thuốc bvtv\",\n    \"quantity\": \"9999\",\n    \"goodsReceiptId\": \"5e16a02767944a0c086f82a2\",\n    \"patchCode\": \"999999999\",\n    \"cooperativeId\": \"5e057818a1c1111795e29b75\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "productId",
            "description": "<p>Id của sản phẩm (có thể là id của Thuốc bvtv hoặc Phân bón hoặc Giống)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Loại của sản phẩm (một trong 3 loại &quot;Thuốc bvtv&quot;, &quot;Phân bón&quot;, &quot;Giống&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "goodsReceiptId",
            "description": "<p>Id hóa đơn nhập</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patchCode",
            "description": "<p>Số lô</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Id của document vừa tạo thành công</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cooperativeId",
            "description": "<p>Id hợp tác xã (trường cooperativeID trong document chứ kp _id)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"_id\": \"5e106cf39a2d430f0fda2557\",\n    \"productId\": \"5e057818a1c1111795e29b75\",\n    \"productType\": \"Thuốc bvtv\",\n    \"quantity\": \"9999\",\n    \"goodsReceiptId\": \"5e16a02767944a0c086f82a2\",\n    \"patchCode\": \"999999999\",\n    \"cooperativeId\": \"5e057818a1c1111795e29b75\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productType-does-not-exist",
            "description": "<p>Trường loại sản phẩm không đúng (Loại sp phải là &quot;Thuốc bvtv&quot; || &quot;Phân bón&quot; || &quot;Giống&quot;)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "quantity-is-positive-integer",
            "description": "<p>Số lượng phải là số nguyên dương</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productId-does-not-exist",
            "description": "<p>Sản phẩm không tồn tại trong danh mục</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "productId-is-invalid",
            "description": "<p>Id sản phẩm không hợp lệ</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "goodsReceiptId-does-not-exist",
            "description": "<p>Hóa đơn nhập không tồn tại</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "goodsReceiptId-is-invalid",
            "description": "<p>Id hóa đơn nhập không tồn tại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "productType does not exist:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"errorMessage\": \"Loại sản phẩm không tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/v1/warehouse.router.js",
    "groupTitle": "Warehouses"
  }
] });
