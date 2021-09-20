import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiKeyGuard } from './common/guards/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    //return object dto with extractly declared properties in class dto
    whitelist: true,
    
    //forbiden request when it has properties not declared in class dtio
    forbidNonWhitelisted: true,

    //transform request object to DTO object
    transform: true,

    transformOptions:{
      enableImplicitConversion: true,
    }
  }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalGuards(new ApiKeyGuard());
  await app.listen(3000);
}
bootstrap();
