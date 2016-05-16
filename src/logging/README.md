# Logger Sample

## Usage

```javascript
import {LogService, ILog} from "ssv-ng2-core";

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