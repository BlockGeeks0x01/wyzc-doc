define({ "api": [
  {
    "type": "get",
    "url": "/api/wyzc/banner",
    "title": "轮播图",
    "name": "Banners",
    "group": "Banner",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"url\": \"http://www.baidu.com\",\n    \"image\": \"http://www.xxx.jpg\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "Banner"
  },
  {
    "type": "post",
    "url": "/api/wyzc/banner",
    "title": "创建轮播图",
    "name": "CreateBanner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>跳转链接</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>图片地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "Banner"
  },
  {
    "type": "delete",
    "url": "/api/wyzc/banner/:id",
    "title": "删除轮播图",
    "name": "DeleteBanner",
    "group": "Banner",
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "Banner"
  },
  {
    "type": "put",
    "url": "/api/wyzc/banner/:id",
    "title": "修改轮播图",
    "name": "UpdateBanner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>跳转链接</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>图片地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "Banner"
  },
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
  },
  {
    "type": "post",
    "url": "/api/wyzc/news",
    "title": "创建动态",
    "name": "CreateNews",
    "group": "News",
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "digest",
            "description": "<p>摘要</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型,1事件，2人物观点，3政策</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "News"
  },
  {
    "type": "delete",
    "url": "/api/wyzc/news/:id",
    "title": "删除动态",
    "name": "DeleteNews",
    "group": "News",
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/api/wyzc/news",
    "title": "行业动态",
    "name": "News",
    "group": "News",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"title\": \"标题\",\n    \"content\": \"内容\",\n    \"digest\": \"摘要\"\n    \"created_time\": \"2017-12-16T16:23:33\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/api/wyzc/news/:id",
    "title": "动态详情",
    "name": "NewsDetail",
    "group": "News",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"title\": \"标题\",\n    \"content\": \"内容\",\n    \"digest\": \"摘要\"\n    \"created_time\": \"2017-12-16T16:23:33\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "News"
  },
  {
    "type": "put",
    "url": "/api/wyzc/news/:id",
    "title": "修改动态",
    "name": "UpdateNews",
    "group": "News",
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "digest",
            "description": "<p>摘要</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型,1事件，2人物观点，3政策</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/api/wyzc/activity",
    "title": "活动",
    "name": "Activity",
    "group": "activity",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"title\": \"标题\",\n    \"description\": \"描述\",\n    \"person\": \"人物\",\n    \"image\": \"http://aaa.jpg\",\n    \"created_time\": \"2017-12-16T16:23:33\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "activity"
  },
  {
    "type": "get",
    "url": "/api/wyzc/activity/:id",
    "title": "活动详情",
    "name": "ActivityDetail",
    "group": "activity",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"title\": \"标题\",\n    \"description\": \"描述\",\n    \"person\": \"人物\",\n    \"image\": \"http://aaa.jpg\",\n    \"created_time\": \"2017-12-16T16:23:33\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "activity"
  },
  {
    "type": "post",
    "url": "/api/wyzc/activity",
    "title": "创建活动",
    "name": "CreateActivity",
    "group": "activity",
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
            "field": "description",
            "description": "<p>介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "person",
            "description": "<p>人物</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "activity"
  },
  {
    "type": "delete",
    "url": "/api/wyzc/activity/:id",
    "title": "删除活动",
    "name": "DeleteActivity",
    "group": "activity",
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "activity"
  },
  {
    "type": "put",
    "url": "/api/wyzc/activity/:id",
    "title": "修改活动",
    "name": "UpdateActivity",
    "group": "activity",
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
            "field": "description",
            "description": "<p>介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "person",
            "description": "<p>人物</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "activity"
  },
  {
    "type": "post",
    "url": "/api/wyzc/notice",
    "title": "创建公告",
    "name": "CreateNotice",
    "group": "notice",
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "digest",
            "description": "<p>摘要</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "notice"
  },
  {
    "type": "delete",
    "url": "/api/wyzc/notice/:id",
    "title": "删除公告",
    "name": "DeleteNotice",
    "group": "notice",
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "notice"
  },
  {
    "type": "get",
    "url": "/api/wyzc/notice/:id",
    "title": "公告详情",
    "name": "NoticeDetail",
    "group": "notice",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"title\": \"标题\",\n    \"content\": \"内容\",\n    \"digest\": \"摘要\"\n    \"created_time\": \"2017-12-16T16:23:33\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "notice"
  },
  {
    "type": "get",
    "url": "/api/wyzc/notice",
    "title": "公告",
    "name": "Notices",
    "group": "notice",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"title\": \"标题\",\n    \"digest\": \"摘要\"\n    \"created_time\": \"2017-12-16T16:23:33\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "notice"
  },
  {
    "type": "put",
    "url": "/api/wyzc/notice/:id",
    "title": "修改公告",
    "name": "UpdateNotice",
    "group": "notice",
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "digest",
            "description": "<p>摘要</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "wyzc/frontend/api.py",
    "groupTitle": "notice"
  }
] });
