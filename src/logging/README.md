# Logger Sample

## Usage

```javascript
import {LogService, ILog} from "core/common";

const id = "auth.service";

@Injectable()
export class AuthService {
	
	private logger: ILog;
	
	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.getInstance(id);
	}
	
	login() {
		this.logger.debug("login", "msg goes here");
	}
	
}
```