# Logger
A minimal logger with a structured log format and replacable LoggingService which logs to console.


## Usage

```ts
import {LoggerFactory, ILog} from "@ssv/ng2-core";

const id = "auth.service";

@Injectable()
export class AuthService {
	
	private logger: ILog;
	
	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get(id);
	}
	
	login() {
		this.logger.debug("login", "msg goes here");
	}
	
}
```