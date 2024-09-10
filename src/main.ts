import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'dotenv';
config();

//const { useTreblle } = require('treblle')

//const { useNestTreblle } = require('treblle')

async function bootstrap() {
  const { useNestTreblle } = require('treblle');
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('MBSPortal api')
    .setDescription('The Malawi Bureau of Standards Web potal api')
    .setVersion('1.0')
    .addTag('MBS')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const expressInstance = app.getHttpAdapter().getInstance();

  useNestTreblle(expressInstance, {
    apiKey: process.env.TREBELL_API_KEY,
    projectId: process.env.TREBELL_PROJECT_ID,
  });

  await app.listen(4000);
}
bootstrap();
