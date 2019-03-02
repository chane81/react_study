# MongoDB 관련

-   만약 클라우드 무료 몽고 DB 를 이용하고 싶다면 https://mlab.com 에서 사용이 가능하다.
-   MongoDB 관련 모듈은 2 가지가 있으며 현재 프로젝트에는 mongoose 를 적용함
-   모듈 1: MongoClient
-   모듈 2: mongoose

## MongoDB 설정관련 파일 세팅(.env)

-   .env 설정을 소스내에서 적용하기 위해선 dotenv 모듈을 설치해야한다.

    -   소스코드내에서 쓰기위한 코드

    ```javascript
    require('dotenv').config(); // 소스내 최상단에 위치

    const { PORT: port = 4000, MONGO_URI: mongoURI } = process.env;
    ```

-   .env 설정
    ```ini
    PORT=4000
    MONGO_URI=mongodb://localhost/blog
    ```

## MongoDB 모델

-   MongoDB 의 데이터를 읽고, 쓰고, 수정하기 위해 따로 models 폴더를 만들어 스키마를 만들어 놓는것이 좋다.

    ```javascript
    const mongoose = require('mongoose');

    const { Schema } = mongoose;

    // mongo db 스키마 세팅
    const Post = new Schema({
    	title: String,
    	body: String,
    	tags: [String],
    	publishedDate: {
    		type: Date,
    		default: new Date() // 현재 날짜 Default Set
    	}
    });

    module.exports = mongoose.model('Post', Post);
    ```

## 데이터 검증

-   MongoDB 의 ObjectId 에 대한 검증은 mongoose.Types 을 써서 검증 하자

    ```javascript
    const { ObjectId } = require('mongoose').Types;

    // id 에 대해서 검증
    exports.checkObjectId = (ctx, next) => {
    	const { id } = ctx.params;

    	if (!ObjectId.isValid(id)) {
    		ctx.status = 400;
    		return null;
    	}

    	return next();
    };
    ```

-   WRITE 를 할때 해당 스키마에 해당하는 데이터의 검증을 위해 joi 모듈을 설치해서 쓰자

    ```javascript
    const Joi = require('joi');

    const schema = Joi.object().keys({
    	title: Joi.string().required(),
    	body: Joi.string().required(),
    	tags: Joi.array().items(Joi.string().required())
    });

    const result = Joi.validate(ctx.request.body, schema);
    ```

## .env 가 git 에 포함되지 않도록 .gitignore 에 구문을 추가

-   .env << 오른쪽 구문 추가

## Yarn add

-   [yarn add MongoClient] 또는 [yarn add mongoose]
-   yarn add dotenv
