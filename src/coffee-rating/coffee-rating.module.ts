import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    DatabaseModule.register([{
      type:'mysql',
      host:'mysql',
      username:'root',
      password:'abcdef123',
      port:3306,
    }]),
    CoffeesModule
  ],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}
