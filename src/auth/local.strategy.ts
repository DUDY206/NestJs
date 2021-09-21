import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly authServices: AuthService
    ){
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authServices.validateUser(username, password);
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}