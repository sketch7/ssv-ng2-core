# Logger Sample

## Register providers

```ts

import {LOGGER_PROVIDERS} from "ssv-ng2-core";

// within bootstrap or AppComponent
providers: [
	LOGGER_PROVIDERS
]

```

## Usage

```ts
import {LoggerFactory, ILog} from "ssv-ng2-core";

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