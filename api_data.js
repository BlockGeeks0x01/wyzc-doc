define({ "api": [
  {
    "type": "post",
    "url": "/api/wyzc/knowledge",
    "title": "创建知识库",
    "name": "CreateKnowledge",
    "group": "Knowledge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "Knowledge"
  },
  {
    "type": "delete",
    "url": "/api/wyzc/knowledge/:id",
    "title": "删除知识库",
    "name": "DeleteKnowledge",
    "group": "Knowledge",
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "Knowledge"
  },
  {
    "type": "get",
    "url": "/api/wyzc/knowledge/:id",
    "title": "知识库详情",
    "name": "KnowledgeDetail",
    "group": "Knowledge",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"title\": \"标题\",\n    \"content\": \"内容\",\n    \"created_time\": \"2017-12-16T16:23:33\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "Knowledge"
  },
  {
    "type": "get",
    "url": "/api/wyzc/knowledge",
    "title": "知识库列表",
    "name": "Knowledges",
    "group": "Knowledge",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"title\": \"标题\",\n    \"content\": \"内容\",\n    \"created_time\": \"2017-12-16T16:23:33\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "Knowledge"
  },
  {
    "type": "put",
    "url": "/api/wyzc/knowledge/:id",
    "title": "修改知识库",
    "name": "UpdateKnowledge",
    "group": "Knowledge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "Knowledge"
  }
] });
