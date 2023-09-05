SYNCHRONOUS

Synchronous is a Python library for distributed, fault-tolerant, and scalable background job processing.

## Features

- **Distributed:** Synchronous can distribute jobs across multiple machines, allowing you to scale your processing power as needed.
- **Fault-tolerant:** Synchronous can handle job failures and automatically retries failed jobs.
- **Scalable:** Synchronous can handle a large number of jobs without sacrificing performance.
- **Easy to use:** Synchronous is easy to use, with a simple API that makes it easy to get started.

## Installation

Synchronous can be installed from PyPI using the following command:


​
pip install synchronous
​


## Usage

To use Synchronous, you first need to create a `Job` object. A `Job` object represents a single unit of work that can be processed by Synchronous.


​
from synchronous import Job
```
job = Job(name="my_job", func=my_function, args=(1, 2, 3))
​
```

Once you have created a `Job` object, you can submit it to Synchronous using the `submit()` method. The `submit()` method will return a `Future` object. A `Future` object represents the result of a job.


​```
future = job.submit()
​```


You can use the `Future` object to get the result of the job. The `result()` method will block until the job is finished and then return the result of the job.


​```
result = future.result()
​```


## More Information

For more information about Synchronous, please see the following resources:

- Documentation
- Examples
- Contributing


ASYNCHRONOUS

Asynchronous is a Python library for distributed, fault-tolerant, and scalable background job processing.

## Features

- **Distributed:** Asynchronous can distribute jobs across multiple machines, allowing you to scale your processing power as needed.
- **Fault-tolerant:** Asynchronous can handle job failures and automatically retries failed jobs.
- **Scalable:** Asynchronous can handle a large number of jobs without sacrificing performance.
- **Easy to use:** Asynchronous is easy to use, with a simple API that makes it easy to get started.

## Installation

Asynchronous can be installed from PyPI using the following command:


​
pip install asynchronous
​


## Usage

To use Asynchronous, you first need to create a `Job` object. A `Job` object represents a single unit of work that can be processed by Asynchronous.


​
from asynchronous import Job
​```

job = Job(name="my_job", func=my_function, args=(1, 2, 3))


​```


Once you have created a `Job` object, you can submit it to Asynchronous using the `submit()` method. The `submit()` method will return a `Future` object. A `Future` object represents the result of a job.


​```

future = job.submit()

​```


You can use the `Future` object to get the result of the job. The `result()` method will block until the job is finished and then return the result of the job.

```
​
result = future.result()
​
```

## More Information

For more information about Asynchronous, please see the following resources:

- Documentation
- Examples
- Contributing
