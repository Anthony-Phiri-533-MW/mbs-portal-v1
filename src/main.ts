import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'dotenv';
config();

const express = require('express')
//const { useTreblle } = require('treblle')

//const { useNestTreblle } = require('treblle')

async function bootstrap() {
  const { useNestTreblle } = require('treblle');
  const app = await NestFactory.create(AppModule);

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
    apiKey: 'fmGGtXEL30hJQsVlsVdPHnrxaMkyC2A5',
    projectId: 'BdqxfNUHceXOTnjQ',
  });

  await app.listen(4000);
}
bootstrap();
