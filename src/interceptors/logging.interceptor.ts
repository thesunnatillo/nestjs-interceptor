import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const start = Date.now();
    console.log(
      "So'rov kelib tuhshdi: ",
      context.switchToHttp().getRequest().url,
    );

    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(`Javob yuborildi, vaqt: ${Date.now() - start}ms`),
        ),
      );
  }
}