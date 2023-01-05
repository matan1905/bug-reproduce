
import { Injectable, CanActivate, ExecutionContext, Inject } from "@nestjs/common";
import { Observable } from 'rxjs';
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(AuthService) private authService: AuthService) {
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request  = context.switchToHttp().getRequest();
    const bearer = request?.headers?.authorization?.split?.(' ')?.[1]
    if(bearer) {
      try{
        const payload = this.authService.verify(bearer)
        console.log(payload.id);
        return true
      }
      catch (e){
        console.error(e);
      }
    }
    return false
  }
}
