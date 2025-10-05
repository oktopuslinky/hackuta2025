Skip to main content
Gemini API
Search
/


English
Get API key
Cookbook
Community
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs


Gemini Developer API
Get a Gemini API Key
Get a Gemini API key and make your first API request in minutes.

Python
JavaScript
Go
Java
REST

from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Explain how AI works in a few words",
)

print(response.text)
Meet the models
Start building with Gemini

2.5 Pro 

Our most powerful thinking model with features for complex reasoning and much more

2.5 Flash 

Our most balanced model, with a 1 million token context window and more

2.5 Flash-Lite 

Our fastest and most cost-efficient multimodal model with great performance for high-frequency tasks

Veo 3 

Our state of the art video generation model, with native audio

Gemini 2.5 Flash Image 

(Nano Banana), our highly effective and precise image generation model

Gemini Embeddings 

Our first Gemini embedding model, designed for production RAG workflows

Explore the API

Native Image Generation (aka Nano Banana)
Generate and edit highly contextual images natively with Gemini 2.5 Flash Image.


Explore long context
Input millions of tokens to Gemini models and derive understanding from unstructured images, videos, and documents.


Generate structured outputs
Constrain Gemini to respond with JSON, a structured data format suitable for automated processing.

Start building with the Gemini API
Get started
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-27 UTC.

Terms
Privacy

EnglishSkip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackGemini API quickstart

This quickstart shows you how to install our libraries and make your first Gemini API request.

Before you begin
You need a Gemini API key. If you don't already have one, you can get it for free in Google AI Studio.

Install the Google GenAI SDK
Python
JavaScript
Go
Java
Apps Script
Using Python 3.9+, install the google-genai package using the following pip command:


pip install -q -U google-genai
Make your first request
Here is an example that uses the generateContent method to send a request to the Gemini API using the Gemini 2.5 Flash model.

If you set your API key as the environment variable GEMINI_API_KEY, it will be picked up automatically by the client when using the Gemini API libraries. Otherwise you will need to pass your API key as an argument when initializing the client.

Note that all code samples in the Gemini API docs assume that you have set the environment variable GEMINI_API_KEY.

Python
JavaScript
Go
Java
Apps Script
REST
from google import genai

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-flash", contents="Explain how AI works in a few words"
)
print(response.text)
"Thinking" is on by default on many of our code samples
Many code samples on this site use the Gemini 2.5 Flash model, which has the "thinking" feature enabled by default to enhance response quality. You should be aware that this may increase response time and token usage. If you prioritize speed or wish to minimize costs, you can disable this feature by setting the thinking budget to zero, as shown in the examples below. For more details, see the thinking guide.

Note: Thinking is only available on Gemini 2.5 series models and can't be disabled on Gemini 2.5 Pro.
Python
JavaScript
Go
REST
Apps Script
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Explain how AI works in a few words",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_budget=0) # Disables thinking
    ),
)
print(response.text)
What's next
Now that you made your first API request, you might want to explore the following guides that show Gemini in action:

Thinking
Text generation
Vision
Long context
Embeddings
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.
Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackUsing Gemini API keys

To use the Gemini API, you need an API key. This page outlines how to create and manage your keys in Google AI Studio as well as how to set up your environment to use them in your code.

API Keys
An API key is an encrypted string that you can use when calling Google Cloud APIs. You can create and manage all your Gemini API Keys from the Google AI Studio API Keys page.

Once you have an API key, you have the following options to connect to the Gemini API:

Setting your API key as an environment variable
Providing your API key explicitly
For initial testing, you can hard code an API key, but this should only be temporary since it's not secure. You can find examples for hard coding the API key in Providing API key explicitly section.

Google Cloud projects
Google Cloud projects are fundamental to using Google Cloud services (such as the Gemini API), managing billing, and controlling collaborators and permissions. Google AI Studio provides a lightweight interface to your Google Cloud projects.

If you don't have any projects created yet, you must either create a new project or import one from Google Cloud into Google AI Studio. The Projects page in Google AI Studio will display all keys that have sufficient permission to use the Gemini API. Refer to the import projects section for instructions.

Import projects
Each Gemini API key is associated with a Google Cloud project. By default, Google AI Studio does not show all of your Cloud Projects. You must import the projects you want by searching for the name or project ID in the Import Projects dialog. To view a complete list of projects you have access to, visit the Cloud Console.

If you don't have any projects imported yet, follow these steps to import a Google Cloud project and create a key:

Go to Google AI Studio.
Open the Dashboard from the left side panel.
Select Projects.
Select the Import projects button in the Projects page.
Search for and select the Google Cloud project you want to import and select the Import button.
Once a project is imported, go to the API Keys page from the Dashboard menu and create an API key in the project you just imported.

Note: For existing users, the keys are pre-populated in the imports pane based on the last 30-days of activity in AI Studio.
Limitations
The following are limitations of managing API keys and Google Cloud projects in Google AI Studio.

You can create a maximum of 10 project at a time from the Google AI Studio Projects page.
You can name and rename projects and keys.
The API keys and Projects pages display a maximum of 100 keys and 50 projects.
Only API keys that have no restrictions, or are restricted to the Generative Language API are displayed.
For additional management access to your projects, visit the Google Cloud Console.

Setting the API key as an environment variable
If you set the environment variable GEMINI_API_KEY or GOOGLE_API_KEY, the API key will automatically be picked up by the client when using one of the Gemini API libraries. It's recommended that you set only one of those variables, but if both are set, GOOGLE_API_KEY takes precedence.

If you're using the REST API, or JavaScript on the browser, you will need to provide the API key explicitly.

Here is how you can set your API key locally as the environment variable GEMINI_API_KEY with different operating systems.

Linux/macOS - Bash
macOS - Zsh
Windows
Bash is a common Linux and macOS terminal configuration. You can check if you have a configuration file for it by running the following command:

~/.bashrc
If the response is "No such file or directory", you will need to create this file and open it by running the following commands, or use zsh:

touch ~/.bashrc
open ~/.bashrc
Next, you need to set your API key by adding the following export command:

export GEMINI_API_KEY=<YOUR_API_KEY_HERE>
After saving the file, apply the changes by running:

source ~/.bashrc
Providing the API key explicitly
In some cases, you may want to explicitly provide an API key. For example:

You're doing a simple API call and prefer hard coding the API key.
You want explicit control without having to rely on automatic discovery of environment variables by the Gemini API libraries
You're using an environment where environment variables are not supported (e.g web) or you are making REST calls.
Below are examples for how you can provide an API key explicitly:

Python
JavaScript
Go
Java
REST
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")

response = client.models.generate_content(
    model="gemini-2.5-flash", contents="Explain how AI works in a few words"
)
print(response.text)
Keep your API key secure
Treat your Gemini API key like a password. If compromised, others can use your project's quota, incur charges (if billing is enabled), and access your private data, such as files.

Critical security rules
Never commit API keys to source control. Do not check your API key into version control systems like Git.

Never expose API keys on the client-side. Do not use your API key directly in web or mobile apps in production. Keys in client-side code (including our JavaScript/TypeScript libraries and REST calls) can be extracted.

Best practices
Use server-side calls with API keys The most secure way to use your API key is to call the Gemini API from a server-side application where the key can be kept confidential.

Use ephemeral tokens for client-side access (Live API only): For direct client-side access to the Live API, you can use ephemeral tokens. They come with lower security risks and can be suitable for production use. Review ephemeral tokens guide for more information.

Consider adding restrictions to your key: You can limit a key's permissions by adding API key restrictions. This minimizes the potential damage if the key is ever leaked.

For some general best practices, you can also review this support article.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-26 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackGemini API libraries

When building with the Gemini API, we recommend using the Google GenAI SDK. These are the official, production-ready libraries that we develop and maintain for the most popular languages. They are in General Availability and used in all our official documentation and examples.

Note: If you're using one of our legacy libraries, we strongly recommend you migrate to the Google GenAI SDK. Review the legacy libraries section for more information.
If you're new to the Gemini API, follow our quickstart guide to get started.

Language support and installation
The Google GenAI SDK is available for the Python, JavaScript/TypeScript, Go and Java languages. You can install each language's library using package managers, or visit their GitHub repos for further engagement:

Python
JavaScript
Go
Java
Library: google-genai

GitHub Repository: googleapis/python-genai

Installation: pip install google-genai

General availability
We started rolling out Google GenAI SDK, a new set of libraries to access Gemini API, in late 2024 when we launched Gemini 2.0.

As of May 2025, they reached General Availability (GA) across all supported platforms and are the recommended libraries to access the Gemini API. They are stable, fully supported for production use, and are actively maintained. They provide access to the latest features, and offer the best performance working with Gemini.

If you're using one of our legacy libraries, we strongly recommend you migrate so that you can access the latest features and get the best performance working with Gemini. Review the legacy libraries section for more information.

Legacy libraries and migration
If you are using one of our legacy libraries, we recommend that you migrate to the new libraries.

The legacy libraries don't provide access to recent features (such as Live API and Veo) and are on a deprecation path. They will stop receiving updates on November 30th, 2025, the feature gaps will grow and potential bugs may no longer get fixed.

Each legacy library's support status varies, detailed in the following table:

Language	Legacy library	Support status	Recommended library
Python	google-generativeai	All support, including bug fixes, ends on November 30th, 2025.	google-genai
JavaScript/TypeScript	@google/generativeai	All support, including bug fixes, ends on November 30th, 2025.	@google/genai
Go	google.golang.org/generative-ai	All support, including bug fixes, ends on November 30th, 2025.	google.golang.org/genai
Dart and Flutter	google_generative_ai	Not actively maintained	Use trusted community or third party libraries, like firebase_ai, or access using REST API
Swift	generative-ai-swift	Not actively maintained	Use Firebase AI Logic
Android	generative-ai-android	Not actively maintained	Use Firebase AI Logic
Note for Java developers: There was no legacy Google-provided Java SDK for the Gemini API, so no migration from a previous Google library is required. You can start directly with the new library in the Language support and installation section.

Prompt templates for code generation
Generative models (e.g., Gemini, Claude) and AI-powered IDEs (e.g., Cursor) may produce code for the Gemini API using outdated or deprecated libraries due to their training data cutoff. For the generated code to use the latest, recommended libraries, provide version and usage guidance directly in your prompts. You can use the templates below to provide the necessary context:

Python

JavaScript/TypeScript

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackOpenAI compatibility

Gemini models are accessible using the OpenAI libraries (Python and TypeScript / Javascript) along with the REST API, by updating three lines of code and using your Gemini API key. If you aren't already using the OpenAI libraries, we recommend that you call the Gemini API directly.

Python
JavaScript
REST

from openai import OpenAI

client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

response = client.chat.completions.create(
    model="gemini-2.5-flash",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {
            "role": "user",
            "content": "Explain to me how AI works"
        }
    ]
)

print(response.choices[0].message)
What changed? Just three lines!

api_key="GEMINI_API_KEY": Replace "GEMINI_API_KEY" with your actual Gemini API key, which you can get in Google AI Studio.

base_url="https://generativelanguage.googleapis.com/v1beta/openai/": This tells the OpenAI library to send requests to the Gemini API endpoint instead of the default URL.

model="gemini-2.0-flash": Choose a compatible Gemini model

Thinking
Gemini 2.5 models are trained to think through complex problems, leading to significantly improved reasoning. The Gemini API comes with a "thinking budget" parameter which gives fine grain control over how much the model will think.

Unlike the Gemini API, the OpenAI API offers three levels of thinking control: "low", "medium", and "high", which map to 1,024, 8,192, and 24,576 tokens, respectively.

If you want to disable thinking, you can set reasoning_effort to "none" (note that reasoning cannot be turned off for 2.5 Pro models).

Python
JavaScript
REST
from openai import OpenAI

client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

response = client.chat.completions.create(
    model="gemini-2.5-flash",
    reasoning_effort="low",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {
            "role": "user",
            "content": "Explain to me how AI works"
        }
    ]
)

print(response.choices[0].message)
Gemini thinking models also produce thought summaries and can use exact thinking budgets. You can use the extra_body field to include these fields in your request.

Note that reasoning_effort and thinking_budget overlap functionality, so they can't be used at the same time.

Python
JavaScript
REST
from openai import OpenAI

client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

response = client.chat.completions.create(
    model="gemini-2.5-flash",
    messages=[{"role": "user", "content": "Explain to me how AI works"}],
    extra_body={
      'extra_body': {
        "google": {
          "thinking_config": {
            "thinking_budget": 800,
            "include_thoughts": True
          }
        }
      }
    }
)

print(response.choices[0].message)
Streaming
The Gemini API supports streaming responses.

Python
JavaScript
REST
from openai import OpenAI

client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

response = client.chat.completions.create(
  model="gemini-2.0-flash",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"}
  ],
  stream=True
)

for chunk in response:
    print(chunk.choices[0].delta)
Function calling
Function calling makes it easier for you to get structured data outputs from generative models and is supported in the Gemini API.

Python
JavaScript
REST
from openai import OpenAI

client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

tools = [
  {
    "type": "function",
    "function": {
      "name": "get_weather",
      "description": "Get the weather in a given location",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The city and state, e.g. Chicago, IL",
          },
          "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
        },
        "required": ["location"],
      },
    }
  }
]

messages = [{"role": "user", "content": "What's the weather like in Chicago today?"}]
response = client.chat.completions.create(
  model="gemini-2.0-flash",
  messages=messages,
  tools=tools,
  tool_choice="auto"
)

print(response)
Image understanding
Gemini models are natively multimodal and provide best in class performance on many common vision tasks.

Python
JavaScript
REST
import base64
from openai import OpenAI

client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

# Getting the base64 string
base64_image = encode_image("Path/to/agi/image.jpeg")

response = client.chat.completions.create(
  model="gemini-2.0-flash",
  messages=[
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "What is in this image?",
        },
        {
          "type": "image_url",
          "image_url": {
            "url":  f"data:image/jpeg;base64,{base64_image}"
          },
        },
      ],
    }
  ],
)

print(response.choices[0])
Generate an image
Note: Image generation is only available in the paid tier.
Generate an image:

Python
JavaScript
REST
import base64
from openai import OpenAI
from PIL import Image
from io import BytesIO

client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

response = client.images.generate(
    model="imagen-3.0-generate-002",
    prompt="a portrait of a sheepadoodle wearing a cape",
    response_format='b64_json',
    n=1,
)

for image_data in response.data:
  image = Image.open(BytesIO(base64.b64decode(image_data.b64_json)))
  image.show()
Audio understanding
Analyze audio input:

Python
JavaScript
REST
import base64
from openai import OpenAI

client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

with open("/path/to/your/audio/file.wav", "rb") as audio_file:
  base64_audio = base64.b64encode(audio_file.read()).decode('utf-8')

response = client.chat.completions.create(
    model="gemini-2.0-flash",
    messages=[
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Transcribe this audio",
        },
        {
              "type": "input_audio",
              "input_audio": {
                "data": base64_audio,
                "format": "wav"
          }
        }
      ],
    }
  ],
)

print(response.choices[0].message.content)
Structured output
Gemini models can output JSON objects in any structure you define.

Python
JavaScript
from pydantic import BaseModel
from openai import OpenAI

client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

class CalendarEvent(BaseModel):
    name: str
    date: str
    participants: list[str]

completion = client.beta.chat.completions.parse(
    model="gemini-2.0-flash",
    messages=[
        {"role": "system", "content": "Extract the event information."},
        {"role": "user", "content": "John and Susan are going to an AI conference on Friday."},
    ],
    response_format=CalendarEvent,
)

print(completion.choices[0].message.parsed)
Embeddings
Text embeddings measure the relatedness of text strings and can be generated using the Gemini API.

Python
JavaScript
REST
from openai import OpenAI

client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

response = client.embeddings.create(
    input="Your text string goes here",
    model="gemini-embedding-001"
)

print(response.data[0].embedding)
Batch API
You can create batch jobs, submit them, and check their status using the OpenAI library.

You'll need to prepare the JSONL file in OpenAI input format. For example:

{"custom_id": "request-1", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "gemini-2.5-flash", "messages": [{"role": "user", "content": "Tell me a one-sentence joke."}]}}
{"custom_id": "request-2", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "gemini-2.5-flash", "messages": [{"role": "user", "content": "Why is the sky blue?"}]}}
OpenAI compatibility for Batch supports creating a batch, monitoring job status, and viewing batch results.

Compatibility for upload and download is currently not supported. Instead, the following example uses the genai client for uploading and downloading files, the same as when using the Gemini Batch API.

Python
from openai import OpenAI

# Regular genai client for uploads & downloads
from google import genai
client = genai.Client()

openai_client = OpenAI(
    api_key="GEMINI_API_KEY",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

# Upload the JSONL file in OpenAI input format, using regular genai SDK
uploaded_file = client.files.upload(
    file='my-batch-requests.jsonl',
    config=types.UploadFileConfig(display_name='my-batch-requests', mime_type='jsonl')
)

# Create batch
batch = openai_client.batches.create(
    input_file_id=batch_input_file_id,
    endpoint="/v1/chat/completions",
    completion_window="24h"
)

# Wait for batch to finish (up to 24h)
while True:
    batch = client.batches.retrieve(batch.id)
    if batch.status in ('completed', 'failed', 'cancelled', 'expired'):
        break
    print(f"Batch not finished. Current state: {batch.status}. Waiting 30 seconds...")
    time.sleep(30)
print(f"Batch finished: {batch}")

# Download results in OpenAI output format, using regular genai SDK
file_content = genai_client.files.download(file=batch.output_file_id).decode('utf-8')

# See batch_output JSONL in OpenAI output format
for line in file_content.splitlines():
    print(line)    
The OpenAI SDK also supports generating embeddings with the Batch API. To do so, switch out the create method's endpoint field for an embeddings endpoint, as well as the url and model keys in the JSONL file:

# JSONL file using embeddings model and endpoint
# {"custom_id": "request-1", "method": "POST", "url": "/v1/embeddings", "body": {"model": "ggemini-embedding-001", "messages": [{"role": "user", "content": "Tell me a one-sentence joke."}]}}
# {"custom_id": "request-2", "method": "POST", "url": "/v1/embeddings", "body": {"model": "gemini-embedding-001", "messages": [{"role": "user", "content": "Why is the sky blue?"}]}}

# ...

# Create batch step with embeddings endpoint
batch = openai_client.batches.create(
    input_file_id=batch_input_file_id,
    endpoint="/v1/embeddings",
    completion_window="24h"
)
See the Batch embedding generation section of the OpenAI compatibility cookbook for a complete example.

extra_body
There are several features supported by Gemini that are not available in OpenAI models but can be enabled using the extra_body field.

extra_body features

cached_content	Corresponds to Gemini's GenerateContentRequest.cached_content.
thinking_config	Corresponds to Gemini's ThinkingConfig.
cached_content
Here's an example of using extra_body to set cached_content:

Python
from openai import OpenAI

client = OpenAI(
    api_key=MY_API_KEY,
    base_url="https://generativelanguage.googleapis.com/v1beta/"
)

stream = client.chat.completions.create(
    model="gemini-2.5-pro",
    n=1,
    messages=[
        {
            "role": "user",
            "content": "Summarize the video"
        }
    ],
    stream=True,
    stream_options={'include_usage': True},
    extra_body={
        'extra_body':
        {
            'google': {
              'cached_content': "cachedContents/0000aaaa1111bbbb2222cccc3333dddd4444eeee"
          }
        }
    }
)

for chunk in stream:
    print(chunk)
    print(chunk.usage.to_dict())
List models
Get a list of available Gemini models:

Python
JavaScript
REST
from openai import OpenAI

client = OpenAI(
  api_key="GEMINI_API_KEY",
  base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

models = client.models.list()
for model in models:
  print(model.id)
Retrieve a model
Retrieve a Gemini model:

Python
JavaScript
REST
from openai import OpenAI

client = OpenAI(
  api_key="GEMINI_API_KEY",
  base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

model = client.models.retrieve("gemini-2.0-flash")
print(model.id)
Current limitations
Support for the OpenAI libraries is still in beta while we extend feature support.

If you have questions about supported parameters, upcoming features, or run into any issues getting started with Gemini, join our Developer Forum.

What's next
Try our OpenAI Compatibility Colab to work through more detailed examples.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackGemini Models

OUR MOST ADVANCED MODEL

Gemini 2.5 Pro
Our state-of-the-art thinking model, capable of reasoning over complex problems in code, math, and STEM, as well as analyzing large datasets, codebases, and documents using long context.

Expand to learn more
FAST AND INTELLIGENT

Gemini 2.5 Flash
Our best model in terms of price-performance, offering well-rounded capabilities. 2.5 Flash is best for large scale processing, low-latency, high volume tasks that require thinking, and agentic use cases.

Expand to learn more
ULTRA FAST

Gemini 2.5 Flash-Lite
Our fastest flash model optimized for cost-efficiency and high throughput.

Expand to learn more


Previous Gemini Models
OUR SECOND GENERATION WORKHORSE MODEL

Gemini 2.0 Flash
Our second generation workhorse model, with a 1 million token context window.

Expand to learn more
OUR SECOND GENERATION FAST MODEL

Gemini 2.0 Flash-Lite
Our second generation small workhorse model, with a 1 million token context window.

Expand to learn more


Model version name patterns
Gemini models are available in either stable, preview, latest, or experimental versions.

Note: The following list refers to the model string naming convention as of September, 2025. Models released prior to that may have different naming conventions. Refer to the exact model string if you are using an older model.
Stable
Points to a specific stable model. Stable models usually don't change. Most production apps should use a specific stable model.

For example: gemini-2.5-flash.

Preview
Points to a preview model which may be used for production. Preview model will typically have billing enabled, might come with more restrictive rate limits and will be deprecated with at least 2 weeks notice.

For example: gemini-2.5-flash-preview-09-2025.

Latest
Points to the latest release for a specific model variation. This can be a stable, preview or experimental release. This alias will get hot-swapped with every new release of a specific model variation. A 2-week notice will be provided through email before the version behind latest is changed.

For example: gemini-flash-latest.

Experimental
Points to an experimental model which will typically be not be suitable for production use and come with more restrictive rate limits. We release experimental models to gather feedback and get our latest updates into the hands of developers quickly.

Experimental models are not stable and availability of model endpoints is subject to change.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-02 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackEmbeddings

The Gemini API offers text embedding models to generate embeddings for words, phrases, sentences, and code. These foundational embeddings power advanced NLP tasks such as semantic search, classification, and clustering, providing more accurate, context-aware results than keyword-based approaches.

Building Retrieval Augmented Generation (RAG) systems is a common use case for embeddings. Embeddings play a key role in significantly enhancing model outputs with improved factual accuracy, coherence, and contextual richness. They efficiently retrieve relevant information from knowledge bases, represented by embeddings, which are then passed as additional context in the input prompt to language models, guiding it to generate more informed and accurate responses.

To learn more about the available embedding model variants, see the Model versions section. For higher throughput serving at half the price, try Batch API Embedding.

Generating embeddings
Use the embedContent method to generate text embeddings:

Python
JavaScript
Go
REST
from google import genai

client = genai.Client()

result = client.models.embed_content(
        model="gemini-embedding-001",
        contents="What is the meaning of life?")

print(result.embeddings)
You can also generate embeddings for multiple chunks at once by passing them in as a list of strings.

Python
JavaScript
Go
REST
from google import genai

client = genai.Client()

result = client.models.embed_content(
        model="gemini-embedding-001",
        contents= [
            "What is the meaning of life?",
            "What is the purpose of existence?",
            "How do I bake a cake?"
        ])

for embedding in result.embeddings:
    print(embedding)
Specify task type to improve performance
You can use embeddings for a wide range of tasks from classification to document search. Specifying the right task type helps optimize the embeddings for the intended relationships, maximizing accuracy and efficiency. For a complete list of supported task types, see the Supported task types table.

The following example shows how you can use SEMANTIC_SIMILARITY to check how similar in meaning strings of texts are.

Note: Cosine similarity is a good distance metric because it focuses on direction rather than magnitude, which more accurately reflects conceptual closeness. Values range from -1 (opposite) to 1 (greatest similarity).
Python
JavaScript
Go
REST
from google import genai
from google.genai import types
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

client = genai.Client()

texts = [
    "What is the meaning of life?",
    "What is the purpose of existence?",
    "How do I bake a cake?"]

result = [
    np.array(e.values) for e in client.models.embed_content(
        model="gemini-embedding-001",
        contents=texts,
        config=types.EmbedContentConfig(task_type="SEMANTIC_SIMILARITY")).embeddings
]

# Calculate cosine similarity. Higher scores = greater semantic similarity.

embeddings_matrix = np.array(result)
similarity_matrix = cosine_similarity(embeddings_matrix)

for i, text1 in enumerate(texts):
    for j in range(i + 1, len(texts)):
        text2 = texts[j]
        similarity = similarity_matrix[i, j]
        print(f"Similarity between '{text1}' and '{text2}': {similarity:.4f}")
The following shows an example output from this code snippet:

Similarity between 'What is the meaning of life?' and 'What is the purpose of existence?': 0.9481

Similarity between 'What is the meaning of life?' and 'How do I bake a cake?': 0.7471

Similarity between 'What is the purpose of existence?' and 'How do I bake a cake?': 0.7371
Supported task types
Task type	Description	Examples
SEMANTIC_SIMILARITY	Embeddings optimized to assess text similarity.	Recommendation systems, duplicate detection
CLASSIFICATION	Embeddings optimized to classify texts according to preset labels.	Sentiment analysis, spam detection
CLUSTERING	Embeddings optimized to cluster texts based on their similarities.	Document organization, market research, anomaly detection
RETRIEVAL_DOCUMENT	Embeddings optimized for document search.	Indexing articles, books, or web pages for search.
RETRIEVAL_QUERY	Embeddings optimized for general search queries. Use RETRIEVAL_QUERY for queries; RETRIEVAL_DOCUMENT for documents to be retrieved.	Custom search
CODE_RETRIEVAL_QUERY	Embeddings optimized for retrieval of code blocks based on natural language queries. Use CODE_RETRIEVAL_QUERY for queries; RETRIEVAL_DOCUMENT for code blocks to be retrieved.	Code suggestions and search
QUESTION_ANSWERING	Embeddings for questions in a question-answering system, optimized for finding documents that answer the question. Use QUESTION_ANSWERING for questions; RETRIEVAL_DOCUMENT for documents to be retrieved.	Chatbox
FACT_VERIFICATION	Embeddings for statements that need to be verified, optimized for retrieving documents that contain evidence supporting or refuting the statement. Use FACT_VERIFICATION for the target text; RETRIEVAL_DOCUMENT for documents to be retrieved	Automated fact-checking systems
Controlling embedding size
The Gemini embedding model, gemini-embedding-001, is trained using the Matryoshka Representation Learning (MRL) technique which teaches a model to learn high-dimensional embeddings that have initial segments (or prefixes) which are also useful, simpler versions of the same data.

Use the output_dimensionality parameter to control the size of the output embedding vector. Selecting a smaller output dimensionality can save storage space and increase computational efficiency for downstream applications, while sacrificing little in terms of quality. By default, it outputs a 3072-dimensional embedding, but you can truncate it to a smaller size without losing quality to save storage space. We recommend using 768, 1536, or 3072 output dimensions.

Python
JavaScript
Go
REST
from google import genai
from google.genai import types

client = genai.Client()

result = client.models.embed_content(
    model="gemini-embedding-001",
    contents="What is the meaning of life?",
    config=types.EmbedContentConfig(output_dimensionality=768)
)

[embedding_obj] = result.embeddings
embedding_length = len(embedding_obj.values)

print(f"Length of embedding: {embedding_length}")
Example output from the code snippet:

Length of embedding: 768
Ensuring quality for smaller dimensions
The 3072 dimension embedding is normalized. Normalized embeddings produce more accurate semantic similarity by comparing vector direction, not magnitude. For other dimensions, including 768 and 1536, you need to normalize the embeddings as follows:

Python
import numpy as np
from numpy.linalg import norm

embedding_values_np = np.array(embedding_obj.values)
normed_embedding = embedding_values_np / np.linalg.norm(embedding_values_np)

print(f"Normed embedding length: {len(normed_embedding)}")
print(f"Norm of normed embedding: {np.linalg.norm(normed_embedding):.6f}") # Should be very close to 1
Example output from this code snippet:

Normed embedding length: 768
Norm of normed embedding: 1.000000
The following table shows the MTEB scores, a commonly used benchmark for embeddings, for different dimensions. Notably, the result shows that performance is not strictly tied to the size of the embedding dimension, with lower dimensions achieving scores comparable to their higher dimension counterparts.

MRL Dimension	MTEB Score
2048	68.16
1536	68.17
768	67.99
512	67.55
256	66.19
128	63.31
Use cases
Text embeddings are crucial for a variety of common AI use cases, such as:

Retrieval-Augmented Generation (RAG): Embeddings enhance the quality of generated text by retrieving and incorporating relevant information into the context of a model.
Information retrieval: Search for the most semantically similar text or documents given a piece of input text.

Document search tutorialtask

Search reranking: Prioritize the most relevant items by semantically scoring initial results against the query.

Search reranking tutorialtask

Anomaly detection: Comparing groups of embeddings can help identify hidden trends or outliers.

Anomaly detection tutorialbubble_chart

Classification: Automatically categorize text based on its content, such as sentiment analysis or spam detection

Classification tutorialtoken

Clustering: Effectively grasp complex relationships by creating clusters and visualizations of your embeddings.

Clustering visualization tutorialbubble_chart

Storing embeddings
As you take embeddings to production, it is common to use vector databases to efficiently store, index, and retrieve high-dimensional embeddings. Google Cloud offers managed data services that can be used for this purpose including BigQuery, AlloyDB, and Cloud SQL.

The following tutorials show how to use other third party vector databases with Gemini Embedding.

ChromaDB tutorialsbolt
QDrant tutorialsbolt
Weaviate tutorialsbolt
Pinecone tutorialsbolt
Model versions
Property	Description
Model code
Gemini API

gemini-embedding-001

Supported data types
Input

Text

Output

Text embeddings

Token limits[*]
Input token limit

2,048

Output dimension size

Flexible, supports: 128 - 3072, Recommended: 768, 1536, 3072

Versions	
Read the model version patterns for more details.
Stable: gemini-embedding-001
Experimental: gemini-embedding-exp-03-07 (deprecating in Oct of 2025)
Latest update	June 2025
Batch embeddings
If latency is not a concern, try using the Gemini Embeddings model with Batch API. This allows for much higher throughput at 50% of interactive Embedding pricing. Find examples on how to get started in the Batch API cookbook.

Responsible use notice
Unlike generative AI models that create new content, the Gemini Embedding model is only intended to transform the format of your input data into a numerical representation. While Google is responsible for providing an embedding model that transforms the format of your input data to the numerical-format requested, users retain full responsibility for the data they input and the resulting embeddings. By using the Gemini Embedding model you confirm that you have the necessary rights to any content that you upload. Do not generate content that infringes on others' intellectual property or privacy rights. Your use of this service is subject to our Prohibited Use Policy and Google's Terms of Service.

Start building with embeddings
Check out the embeddings quickstart notebook to explore the model capabilities and learn how to customize and visualize your embeddings.

Deprecation notice for legacy models
The following models will be deprecated in October, 2025: - embedding-001 - embedding-gecko-001 - gemini-embedding-exp-03-07 (gemini-embedding-exp)

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-01 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Gemini Developer API Pricing


Start building free of charge with generous limits, then scale up with pay-as-you-go pricing for your production ready applications.

Free
For developers and small projects getting started with the Gemini API.

check_circle
Limited access to certain models
check_circle
Free input & output tokens
check_circle
Google AI Studio access
check_circle
Data used to improve our products
*
Get started for Free
Paid
For production applications that require higher volumes and advanced features.

check_circle
Higher rate limits for production deployments
check_circle
Access to Context Caching
check_circle
Batch API (50% cost reduction)
check_circle
Access to Google's most advanced models
check_circle
Data *not* used to improve our products
*
Upgrade to Paid
Enterprise
For large-scale deployments with custom needs for security, support, and compliance, powered by Vertex AI.

check_circle
All features in Paid, plus optional access to:
check_circle
Dedicated support channels
check_circle
Advanced security & compliance
check_circle
Provisioned throughput
check_circle
Volume-based discounts (based on usage)
check_circle
ML Ops, Model garden and more
Contact Sales
Gemini 2.5 Pro
gemini-2.5-pro
Try it in Google AI Studio

Our state-of-the-art multipurpose model, which excels at coding and complex reasoning tasks.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price	Free of charge	$1.25, prompts <= 200k tokens
$2.50, prompts > 200k tokens
Output price (including thinking tokens)	Free of charge	$10.00, prompts <= 200k tokens
$15.00, prompts > 200k
Context caching price	Not available	$0.31, prompts <= 200k tokens
$0.625, prompts > 200k
$4.50 / 1,000,000 tokens per hour (storage price)
Grounding with Google Search	Not available	1,500 RPD (free), then $35 / 1,000 requests
Used to improve our products	Yes	No
Gemini 2.5 Flash
gemini-2.5-flash
Try it in Google AI Studio

Our first hybrid reasoning model which supports a 1M token context window and has thinking budgets.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price	Free of charge	$0.30 (text / image / video)
$1.00 (audio)
Output price (including thinking tokens)	Free of charge	$2.50
Context caching price	Not available	$0.075 (text / image / video)
$0.25 (audio)
$1.00 / 1,000,000 tokens per hour (storage price)
Grounding with Google Search	Free of charge, up to 500 RPD (limit shared with Flash-Lite RPD)	1,500 RPD (free, limit shared with Flash-Lite RPD), then $35 / 1,000 requests
Live API	Free of charge	Input: $0.50 (text), $3.00 (audio / image [video])
Output: $2.00 (text), $12.00 (audio)
Used to improve our products	Yes	No
Gemini 2.5 Flash Preview
gemini-2.5-flash-preview-09-2025
Try it in Google AI Studio

The latest model based on the 2.5 Flash model. 2.5 Flash Preview is best for large scale processing, low-latency, high volume tasks that require thinking, and agentic use cases.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price	Free of charge	$0.30 (text / image / video)
$1.00 (audio)
Output price (including thinking tokens)	Free of charge	$2.50
Context caching price	Not available	$0.075 (text / image / video)
$0.25 (audio)
$1.00 / 1,000,000 tokens per hour (storage price)
Grounding with Google Search	Free of charge, up to 500 RPD (limit shared with Flash-Lite RPD)	1,500 RPD (free, limit shared with Flash-Lite RPD), then $35 / 1,000 requests
Live API	Free of charge	Input: $0.50 (text), $3.00 (audio / image [video])
Output: $2.00 (text), $12.00 (audio)
Used to improve our products	Yes	No
Gemini 2.5 Flash-Lite
gemini-2.5-flash-lite
Try it in Google AI Studio

Our smallest and most cost effective model, built for at scale usage.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price (text, image, video)	Free of charge	$0.10 (text / image / video)
$0.30 (audio)
Output price (including thinking tokens)	Free of charge	$0.40
Context caching price	Not available	$0.025 (text / image / video)
$0.125 (audio)
$1.00 / 1,000,000 tokens per hour (storage price)
Grounding with Google Search	Free of charge, up to 500 RPD (limit shared with Flash RPD)	1,500 RPD (free, limit shared with Flash RPD), then $35 / 1,000 requests
Used to improve our products	Yes	No
Gemini 2.5 Flash-Lite Preview
gemini-2.5-flash-lite-preview-09-2025
Try it in Google AI Studio

The latest model based on Gemini 2.5 Flash lite optimized for cost-efficiency, high throughput and high quality.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price (text, image, video)	Free of charge	$0.10 (text / image / video)
$0.30 (audio)
Output price (including thinking tokens)	Free of charge	$0.40
Context caching price	Not available	$0.025 (text / image / video)
$0.125 (audio)
$1.00 / 1,000,000 tokens per hour (storage price)
Grounding with Google Search	Free of charge, up to 500 RPD (limit shared with Flash RPD)	1,500 RPD (free, limit shared with Flash RPD), then $35 / 1,000 requests
Used to improve our products	Yes	No
Gemini 2.5 Flash Native Audio
gemini-2.5-flash-preview-native-audio-dialog
Try it in Google AI Studio

Our native audio models optimized for higher quality audio outputs with better pacing, voice naturalness, verbosity, and mood.

Preview models may change before becoming stable and have more restrictive rate limits.

Free Tier	Paid Tier, per 1M tokens in USD
Input price	Not available	$0.50 (text)
$3.00 (audio / video)
Output price (including thinking tokens)	Not available	$2.00 (text)
$12.00 (audio)
Used to improve our products	Yes	No
Gemini 2.5 Flash Image
gemini-2.5-flash-image
Try it in Google AI Studio

Our native image generation model, optimized for speed, flexibility, and contextual understanding. Text input and output is priced the same as 2.5 Flash.

Preview models may change before becoming stable and have more restrictive rate limits.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price	Not available	$0.30 (text / image)
Output price	Not available	$0.039 per image*
Used to improve our products	Yes	No
[*] Image output is priced at $30 per 1,000,000 tokens. Output images up to 1024x1024px consume 1290 tokens and are equivalent to $0.039 per image.

Gemini 2.5 Flash Preview TTS
gemini-2.5-flash-preview-tts
Try it in Google AI Studio

Our 2.5 Flash text-to-speech audio model optimized for price-performant, low-latency, controllable speech generation.

Preview models may change before becoming stable and have more restrictive rate limits.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price	Free of charge	$0.50 (text)
Output price	Free of charge	$10.00 (audio)
Used to improve our products	Yes	No
Gemini 2.5 Pro Preview TTS
gemini-2.5-pro-preview-tts
Try it in Google AI Studio

Our 2.5 Pro text-to-speech audio model optimized for powerful, low-latency speech generation for more natural outputs and easier to steer prompts.

Preview models may change before becoming stable and have more restrictive rate limits.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price	Not available	$1.00 (text)
Output price	Not available	$20.00 (audio)
Used to improve our products	Yes	No
Gemini 2.0 Flash
gemini-2.0-flash
Try it in Google AI Studio

Our most balanced multimodal model with great performance across all tasks, with a 1 million token context window, and built for the era of Agents.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price	Free of charge	$0.10 (text / image / video)
$0.70 (audio)
Output price	Free of charge	$0.40
Context caching price	Free of charge	$0.025 / 1,000,000 tokens (text/image/video)
$0.175 / 1,000,000 tokens (audio)
Context caching (storage)	Not available	$1.00 / 1,000,000 tokens per hour
Image generation pricing	Free of charge	$0.039 per image*
Tuning price	Not available	Not available
Grounding with Google Search	Free of charge, up to 500 RPD	1,500 RPD (free), then $35 / 1,000 requests
Live API	Free of charge	Input: $0.35 (text), $2.10 (audio / image [video])
Output: $1.50 (text), $8.50 (audio)
Used to improve our products	Yes	No
[*] Image output is priced at $30 per 1,000,000 tokens. Output images up to 1024x1024px consume 1290 tokens and are equivalent to $0.039 per image.

Gemini 2.0 Flash-Lite
gemini-2.0-flash-lite
Try it in Google AI Studio

Our smallest and most cost effective model, built for at scale usage.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price	Free of charge	$0.075
Output price	Free of charge	$0.30
Context caching price	Not available	Not available
Context caching (storage)	Not available	Not available
Tuning price	Not available	Not available
Grounding with Google Search	Not available	Not available
Used to improve our products	Yes	No
Imagen 4
imagen-4.0-generate-001, imagen-4.0-ultra-generate-001, imagen-4.0-fast-generate-001
Try it in Google AI Studio

Our latest image generation model, with significantly better text rendering and better overall image quality.

Preview models may change before becoming stable and have more restrictive rate limits.

Free Tier	Paid Tier, per Image in USD
Imagen 4 Fast image price	Not available	$0.02
Imagen 4 Standard image price	Not available	$0.04
Imagen 4 Ultra image price	Not available	$0.06
Used to improve our products	Yes	No
Imagen 3
imagen-3.0-generate-002
Try it in Google AI Studio

Our state-of-the-art image generation model, available to developers on the paid tier of the Gemini API.

Free Tier	Paid Tier, per Image in USD
Image price	Not available	$0.03
Used to improve our products	Yes	No
Veo 3
veo-3.0-generate-001, veo-3.0-fast-generate-001
Try Veo 3

Our latest video generation model, available to developers on the paid tier of the Gemini API.

Free Tier	Paid Tier, per second in USD
Veo 3 Standard video with audio price (default)	Not available	$0.40
Veo 3 Fast video with audio price (default)	Not available	$0.15
Used to improve our products	Yes	No
Note: In some cases, an audio processing issue may prevent a video from being generated. You will only be charged if your video is successfully generated.
Veo 2
veo-2.0-generate-001
Try the API

Our state-of-the-art video generation model, available to developers on the paid tier of the Gemini API.

Free Tier	Paid Tier, per second in USD
Video price	Not available	$0.35
Used to improve our products	Yes	No
Gemini Embedding
gemini-embedding-001
Try the API

Our newest embeddings model, more stable and with higher rate limits than previous versions, available to developers on the free and paid tiers of the Gemini API.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price	Free of charge	$0.15
Used to improve our products	Yes	No
Gemini Robotics-ER 1.5 Preview
gemini-robotics-er-1.5-preview
Try it in Google AI Studio

Gemini Robotics-ER, short for Gemini Robotics-Embodied Reasoning, is a thinking model that enhances robots' abilities to understand and interact with the physical world.

Standard
Batch
Free Tier	Paid Tier, per 1M tokens in USD
Input price	Free of charge	$0.30 (text / image / video)
$1.00 (audio)
Output price (including thinking tokens)	Free of charge	$2.50
Grounding with Google Search	Free of charge, up to 500 RPD (limit shared with Flash-Lite RPD)	1,500 RPD (free, limit shared with Flash-Lite RPD), then $35 / 1,000 requests
Used to improve our products	Yes	No
Gemma 3
Try Gemma 3

Our lightweight, state-of the art, open model built from the same technology that powers our Gemini models.

Free Tier	Paid Tier, per 1M tokens in USD
Input price	Free of charge	Not available
Output price	Free of charge	Not available
Context caching price	Free of charge	Not available
Context caching (storage)	Free of charge	Not available
Tuning price	Not available	Not available
Grounding with Google Search	Not available	Not available
Used to improve our products	Yes	No
Gemma 3n
Try Gemma 3n

Our open model built for efficient performance on everyday devices like mobile phones, laptops, and tablets.

Free Tier	Paid Tier, per 1M tokens in USD
Input price	Free of charge	Not available
Output price	Free of charge	Not available
Context caching price	Free of charge	Not available
Context caching (storage)	Free of charge	Not available
Tuning price	Not available	Not available
Grounding with Google Search	Not available	Not available
Used to improve our products	Yes	No
[*] Google AI Studio usage is free of charge in all available regions. See Billing FAQs for details.

[**] Prices may differ from the prices listed here and the prices offered on Vertex AI. For Vertex prices, see the Vertex AI pricing page.

[***] If you are using dynamic retrieval to optimize costs, only requests that contain at least one grounding support URL from the web in their response are charged for Grounding with Google Search. Costs for Gemini always apply. Rate limits are subject to change.

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-02 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackRate limits

Rate limits regulate the number of requests you can make to the Gemini API within a given timeframe. These limits help maintain fair usage, protect against abuse, and help maintain system performance for all users.

How rate limits work
Rate limits are usually measured across three dimensions:

Requests per minute (RPM)
Tokens per minute (input) (TPM)
Requests per day (RPD)
Your usage is evaluated against each limit, and exceeding any of them will trigger a rate limit error. For example, if your RPM limit is 20, making 21 requests within a minute will result in an error, even if you haven't exceeded your TPM or other limits.

Rate limits are applied per project, not per API key.

Requests per day (RPD) quotas reset at midnight Pacific time.

Limits vary depending on the specific model being used, and some limits only apply to specific models. For example, Images per minute, or IPM, is only calculated for models capable of generating images (Imagen 3), but is conceptually similar to TPM. Other models might have a token per day limit (TPD).

Rate limits are more restricted for experimental and preview models.

Usage tiers
Rate limits are tied to the project's usage tier. As your API usage and spending increase, you'll have an option to upgrade to a higher tier with increased rate limits.

The qualifications for Tiers 2 and 3 are based on the total cumulative spending on Google Cloud services (including, but not limited to, the Gemini API) for the billing account linked to your project.

Tier	Qualifications
Free	Users in eligible countries
Tier 1	Billing account linked to the project
Tier 2	Total spend: > $250 and at least 30 days since successful payment
Tier 3	Total spend: > $1,000 and at least 30 days since successful payment
When you request an upgrade, our automated abuse protection system performs additional checks. While meeting the stated qualification criteria is generally sufficient for approval, in rare cases an upgrade request may be denied based on other factors identified during the review process.

This system helps maintain the security and integrity of the Gemini API platform for all users.

Standard API rate limits
The following table lists the rate limits for all standard Gemini API calls.

Note: Any values that show * have no published rate limits.
Free Tier
Tier 1
Tier 2
Tier 3
Model	RPM	TPM	RPD
Text-out models
Gemini 2.5 Pro	5	250,000	100
Gemini 2.5 Flash	10	250,000	250
Gemini 2.5 Flash Preview	10	250,000	250
Gemini 2.5 Flash-Lite	15	250,000	1,000
Gemini 2.5 Flash-Lite Preview	15	250,000	1,000
Gemini 2.0 Flash	15	1,000,000	200
Gemini 2.0 Flash-Lite	30	1,000,000	200
Live API
Gemini 2.5 Flash Live	3 sessions	1,000,000	*
Gemini 2.5 Flash Preview Native Audio	1 session	25,000	5
Gemini 2.5 Flash Experimental Native Audio Thinking	1 session	10,000	5
Gemini 2.0 Flash Live	3 sessions	1,000,000	*
Multi-modal generation models
Gemini 2.5 Flash Preview TTS	3	10,000	15
Gemini 2.0 Flash Preview Image Generation	10	200,000	100
Other models
Gemma 3 & 3n	30	15,000	14,400
Gemini Embedding	100	30,000	1,000
Gemini Robotics-ER 1.5 Preview	10	250,000	250
Deprecated models
Gemini 1.5 Flash (Deprecated)	15	250,000	50
Gemini 1.5 Flash-8B (Deprecated)	15	250,000	50
Specified rate limits are not guaranteed and actual capacity may vary.

Batch API rate limits
Batch API requests are subject to their own rate limits, separate from the non-batch API calls.

Concurrent batch requests: 100
Input file size limit: 2GB
File storage limit: 20GB
Enqueued tokens per model: The Batch Enqueued Tokens column in the rate limits table lists the maximum number of tokens that can be enqueued for batch processing across all your active batch jobs for a given model. See in the standard API rate limits table.
How to upgrade to the next tier
The Gemini API uses Cloud Billing for all billing services. To transition from the Free tier to a paid tier, you must first enable Cloud Billing for your Google Cloud project.

Once your project meets the specified criteria, it becomes eligible for an upgrade to the next tier. To request an upgrade, follow these steps:

Navigate to the API keys page in AI Studio.
Locate the project you want to upgrade and click "Upgrade". The "Upgrade" option will only show up for projects that meet next tier qualifications.
After a quick validation, the project will be upgraded to the next tier.

Request a rate limit increase
Each model variation has an associated rate limit (requests per minute, RPM). For details on those rate limits, see Gemini models.

Request paid tier rate limit increase

We offer no guarantees about increasing your rate limit, but we'll do our best to review your request.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-02 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackBilling

This guide provides an overview of different Gemini API billing options, explains how to enable billing and monitor usage, and provides answers to frequently asked questions (FAQs) about billing.

Upgrade to the Gemini API paid tier
About billing
Billing for the Gemini API is based on two pricing tiers: free of charge (or free) and pay-as-you-go (or paid). Pricing and rate limits differ between these tiers and also vary by model. You can check out the rate limits and pricing pages for more into. For a model-by-model breakdown of capabilities, see the Gemini models page.

How to request an upgrade
To transition from the free tier to the pay-as-you-go plan, you need to enable billing for your Google Cloud project. The button you see in Google AI Studio depends on your project's current plan.

If you're on the free tier, you'll see a Set up Billing button for your project.
If you're already on the paid tier and meet the criteria for a plan change, you might see an Upgrade button.
To start the process, follow these steps:

Go to the AI Studio API keys page.
Find the project you want to move to the paid plan and click either Set up Billing or Upgrade, depending on the button displayed.
The next step depends on the button you clicked:
If you clicked Set up Billing: You'll be redirected to the Google Cloud console to link a billing account to your project. Follow the on-screen instructions to complete the process.
If you clicked Upgrade: The system will automatically verify your project's eligibility. If your project meets all the requirements, it will be instantly upgraded to the next tier.
Why use the paid tier?
When you enable billing and use the paid tier, you benefit from higher rate limits, and your prompts and responses aren't used to improve Google products. For more information on data use for paid services, see the terms of service.

Cloud Billing
The Gemini API uses Cloud Billing for billing services. To use the paid tier, you must set up Cloud Billing on your cloud project. After you've enabled Cloud Billing, you can use Cloud Billing tools to track spending, understand costs, make payments, and access Cloud Billing support.

Enable billing
You can enable Cloud Billing starting from Google AI Studio:

Open Google AI Studio.

In the bottom of the left sidebar, select Settings > Plan information.

Click Set up Billing for your chosen project to enable Cloud Billing.

Monitor usage
After you enable Cloud Billing, you can monitor your usage of the Gemini API in Google AI Studio.

Frequently asked questions
This section provides answers to frequently asked questions.

What am I billed for?
Gemini API pricing is based on the following:

Input token count
Output token count
Cached token count
Cached token storage duration
For pricing information, see the pricing page.

Where can I view my quota?
You can view your quota and system limits in the Google Cloud console.

How do I request more quota?
To request more quota, follow the instructions at How to request an upgrade.

Can I use the Gemini API for free in EEA (including EU), the UK, and CH?
Yes, we make the free tier and paid tier available in many regions.

If I set up billing with the Gemini API, will I be charged for my Google AI Studio usage?
No, Google AI Studio usage remains free of charge regardless of if you set up billing across all supported regions.

Can I use 1M tokens in the free tier?
The free tier for Gemini API differs based on the model selected. For now, you can try the 1M token context window in the following ways:

In Google AI Studio
With pay-as-you-go plans
With free-of-charge plans for select models
See the latest free-of-charge rate limits per model on rate limits page.

How can I calculate the number of tokens I'm using?
Use the GenerativeModel.count_tokens method to count the number of tokens. Refer to the Tokens guide to learn more about tokens.

Can I use my Google Cloud credits with the Gemini API?
Yes, Google Cloud credits can be used towards Gemini API usage.

How is billing handled?
Billing for the Gemini API is handled by the Cloud Billing system.

Am I charged for failed requests?
If your request fails with a 400 or 500 error, you won't be charged for the tokens used. However, the request will still count against your quota.

Is there a charge for fine-tuning the models?
Model tuning is free, but inference on tuned models is charged at the same rate as the base models.

Is GetTokens billed?
Requests to the GetTokens API are not billed, and they don't count against inference quota.

How is my Google AI Studio data handled if I have a paid API account?
Refer to the terms for details on how data is handled when Cloud billing is enabled (see "How Google Uses Your Data" under "Paid Services"). Note that your Google AI Studio prompts are treated under the same "Paid Services" terms so long as at least 1 API project has billing enabled, which you can validate on the Gemini API Key page if you see any projects marked as "Paid" under "Plan".

Where can I get help with billing?
To get help with billing, see Get Cloud Billing support.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-27 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackText generation

The Gemini API can generate text output from various inputs, including text, images, video, and audio, leveraging Gemini models.

Here's a basic example that takes a single text input:

Python
JavaScript
Go
REST
Apps Script

from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="How does AI work?"
)
print(response.text)

Thinking with Gemini 2.5
2.5 Flash and Pro models have "thinking" enabled by default to enhance quality, which may take longer to run and increase token usage.

When using 2.5 Flash, you can disable thinking by setting the thinking budget to zero.

For more details, see the thinking guide.

Python
JavaScript
Go
REST
Apps Script
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="How does AI work?",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_budget=0) # Disables thinking
    ),
)
print(response.text)
System instructions and other configurations
You can guide the behavior of Gemini models with system instructions. To do so, pass a GenerateContentConfig object.

Python
JavaScript
Go
REST
Apps Script
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-flash",
    config=types.GenerateContentConfig(
        system_instruction="You are a cat. Your name is Neko."),
    contents="Hello there"
)

print(response.text)
The GenerateContentConfig object also lets you override default generation parameters, such as temperature.

Python
JavaScript
Go
REST
Apps Script
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=["Explain how AI works"],
    config=types.GenerateContentConfig(
        temperature=0.1
    )
)
print(response.text)
Refer to the GenerateContentConfig in our API reference for a complete list of configurable parameters and their descriptions.

Multimodal inputs
The Gemini API supports multimodal inputs, allowing you to combine text with media files. The following example demonstrates providing an image:

Python
JavaScript
Go
REST
Apps Script
from PIL import Image
from google import genai

client = genai.Client()

image = Image.open("/path/to/organ.png")
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=[image, "Tell me about this instrument"]
)
print(response.text)
For alternative methods of providing images and more advanced image processing, see our image understanding guide. The API also supports document, video, and audio inputs and understanding.

Streaming responses
By default, the model returns a response only after the entire generation process is complete.

For more fluid interactions, use streaming to receive GenerateContentResponse instances incrementally as they're generated.

Python
JavaScript
Go
REST
Apps Script
from google import genai

client = genai.Client()

response = client.models.generate_content_stream(
    model="gemini-2.5-flash",
    contents=["Explain how AI works"]
)
for chunk in response:
    print(chunk.text, end="")
Multi-turn conversations (Chat)
Our SDKs provide functionality to collect multiple rounds of prompts and responses into a chat, giving you an easy way to keep track of the conversation history.

Note: Chat functionality is only implemented as part of the SDKs. Behind the scenes, it still uses the generateContent API. For multi-turn conversations, the full conversation history is sent to the model with each follow-up turn.
Python
JavaScript
Go
REST
Apps Script
from google import genai

client = genai.Client()
chat = client.chats.create(model="gemini-2.5-flash")

response = chat.send_message("I have 2 dogs in my house.")
print(response.text)

response = chat.send_message("How many paws are in my house?")
print(response.text)

for message in chat.get_history():
    print(f'role - {message.role}',end=": ")
    print(message.parts[0].text)
Streaming can also be used for multi-turn conversations.

Python
JavaScript
Go
REST
Apps Script
from google import genai

client = genai.Client()
chat = client.chats.create(model="gemini-2.5-flash")

response = chat.send_message_stream("I have 2 dogs in my house.")
for chunk in response:
    print(chunk.text, end="")

response = chat.send_message_stream("How many paws are in my house?")
for chunk in response:
    print(chunk.text, end="")

for message in chat.get_history():
    print(f'role - {message.role}', end=": ")
    print(message.parts[0].text)
Supported models
All models in the Gemini family support text generation. To learn more about the models and their capabilities, visit the Models page.

Best practices
Prompting tips
For basic text generation, a zero-shot prompt often suffices without needing examples, system instructions or specific formatting.

For more tailored outputs:

Use System instructions to guide the model.
Provide few example inputs and outputs to guide the model. This is often referred to as few-shot prompting.
Consult our prompt engineering guide for more tips.

Structured output
In some cases, you may need structured output, such as JSON. Refer to our structured output guide to learn how.

What's next
Try the Gemini API getting started Colab.
Explore Gemini's image, video, audio and document understanding capabilities.
Learn about multimodal file prompting strategies.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackSpeech generation (text-to-speech)

The Gemini API can transform text input into single speaker or multi-speaker audio using native text-to-speech (TTS) generation capabilities. Text-to-speech (TTS) generation is controllable, meaning you can use natural language to structure interactions and guide the style, accent, pace, and tone of the audio.

The TTS capability differs from speech generation provided through the Live API, which is designed for interactive, unstructured audio, and multimodal inputs and outputs. While the Live API excels in dynamic conversational contexts, TTS through the Gemini API is tailored for scenarios that require exact text recitation with fine-grained control over style and sound, such as podcast or audiobook generation.

This guide shows you how to generate single-speaker and multi-speaker audio from text.

Preview: Native text-to-speech (TTS) is in Preview.
Before you begin
Ensure you use a Gemini 2.5 model variant with native text-to-speech (TTS) capabilities, as listed in the Supported models section. For optimal results, consider which model best fits your specific use case.

You may find it useful to test the Gemini 2.5 TTS models in AI Studio before you start building.

Note: TTS models accept text-only inputs and produce audio-only outputs. For a complete list of restrictions specific to TTS models, review the Limitations section.
Single-speaker text-to-speech
To convert text to single-speaker audio, set the response modality to "audio", and pass a SpeechConfig object with VoiceConfig set. You'll need to choose a voice name from the prebuilt output voices.

This example saves the output audio from the model in a wave file:

Python
JavaScript
REST
from google import genai
from google.genai import types
import wave

# Set up the wave file to save the output:
def wave_file(filename, pcm, channels=1, rate=24000, sample_width=2):
   with wave.open(filename, "wb") as wf:
      wf.setnchannels(channels)
      wf.setsampwidth(sample_width)
      wf.setframerate(rate)
      wf.writeframes(pcm)

client = genai.Client()

response = client.models.generate_content(
   model="gemini-2.5-flash-preview-tts",
   contents="Say cheerfully: Have a wonderful day!",
   config=types.GenerateContentConfig(
      response_modalities=["AUDIO"],
      speech_config=types.SpeechConfig(
         voice_config=types.VoiceConfig(
            prebuilt_voice_config=types.PrebuiltVoiceConfig(
               voice_name='Kore',
            )
         )
      ),
   )
)

data = response.candidates[0].content.parts[0].inline_data.data

file_name='out.wav'
wave_file(file_name, data) # Saves the file to current directory
For more code samples, refer to the "TTS - Get Started" file in the cookbooks repository:

View on GitHub

Multi-speaker text-to-speech
For multi-speaker audio, you'll need a MultiSpeakerVoiceConfig object with each speaker (up to 2) configured as a SpeakerVoiceConfig. You'll need to define each speaker with the same names used in the prompt:

Python
JavaScript
REST
from google import genai
from google.genai import types
import wave

# Set up the wave file to save the output:
def wave_file(filename, pcm, channels=1, rate=24000, sample_width=2):
   with wave.open(filename, "wb") as wf:
      wf.setnchannels(channels)
      wf.setsampwidth(sample_width)
      wf.setframerate(rate)
      wf.writeframes(pcm)

client = genai.Client()

prompt = """TTS the following conversation between Joe and Jane:
         Joe: How's it going today Jane?
         Jane: Not too bad, how about you?"""

response = client.models.generate_content(
   model="gemini-2.5-flash-preview-tts",
   contents=prompt,
   config=types.GenerateContentConfig(
      response_modalities=["AUDIO"],
      speech_config=types.SpeechConfig(
         multi_speaker_voice_config=types.MultiSpeakerVoiceConfig(
            speaker_voice_configs=[
               types.SpeakerVoiceConfig(
                  speaker='Joe',
                  voice_config=types.VoiceConfig(
                     prebuilt_voice_config=types.PrebuiltVoiceConfig(
                        voice_name='Kore',
                     )
                  )
               ),
               types.SpeakerVoiceConfig(
                  speaker='Jane',
                  voice_config=types.VoiceConfig(
                     prebuilt_voice_config=types.PrebuiltVoiceConfig(
                        voice_name='Puck',
                     )
                  )
               ),
            ]
         )
      )
   )
)

data = response.candidates[0].content.parts[0].inline_data.data

file_name='out.wav'
wave_file(file_name, data) # Saves the file to current directory
Controlling speech style with prompts
You can control style, tone, accent, and pace using natural language prompts for both single- and multi-speaker TTS. For example, in a single-speaker prompt, you can say:

Say in an spooky whisper:
"By the pricking of my thumbs...
Something wicked this way comes"
In a multi-speaker prompt, provide the model with each speaker's name and corresponding transcript. You can also provide guidance for each speaker individually:

Make Speaker1 sound tired and bored, and Speaker2 sound excited and happy:

Speaker1: So... what's on the agenda today?
Speaker2: You're never going to guess!
Try using a voice option that corresponds to the style or emotion you want to convey, to emphasize it even more. In the previous prompt, for example, Enceladus's breathiness might emphasize "tired" and "bored", while Puck's upbeat tone could complement "excited" and "happy".

Generating a prompt to convert to audio
The TTS models only output audio, but you can use other models to generate a transcript first, then pass that transcript to the TTS model to read aloud.

Python
JavaScript
from google import genai
from google.genai import types

client = genai.Client()

transcript = client.models.generate_content(
   model="gemini-2.0-flash",
   contents="""Generate a short transcript around 100 words that reads
            like it was clipped from a podcast by excited herpetologists.
            The hosts names are Dr. Anya and Liam.""").text

response = client.models.generate_content(
   model="gemini-2.5-flash-preview-tts",
   contents=transcript,
   config=types.GenerateContentConfig(
      response_modalities=["AUDIO"],
      speech_config=types.SpeechConfig(
         multi_speaker_voice_config=types.MultiSpeakerVoiceConfig(
            speaker_voice_configs=[
               types.SpeakerVoiceConfig(
                  speaker='Dr. Anya',
                  voice_config=types.VoiceConfig(
                     prebuilt_voice_config=types.PrebuiltVoiceConfig(
                        voice_name='Kore',
                     )
                  )
               ),
               types.SpeakerVoiceConfig(
                  speaker='Liam',
                  voice_config=types.VoiceConfig(
                     prebuilt_voice_config=types.PrebuiltVoiceConfig(
                        voice_name='Puck',
                     )
                  )
               ),
            ]
         )
      )
   )
)

# ...Code to stream or save the output
Voice options
TTS models support the following 30 voice options in the voice_name field:

Zephyr -- Bright	Puck -- Upbeat	Charon -- Informative
Kore -- Firm	Fenrir -- Excitable	Leda -- Youthful
Orus -- Firm	Aoede -- Breezy	Callirrhoe -- Easy-going
Autonoe -- Bright	Enceladus -- Breathy	Iapetus -- Clear
Umbriel -- Easy-going	Algieba -- Smooth	Despina -- Smooth
Erinome -- Clear	Algenib -- Gravelly	Rasalgethi -- Informative
Laomedeia -- Upbeat	Achernar -- Soft	Alnilam -- Firm
Schedar -- Even	Gacrux -- Mature	Pulcherrima -- Forward
Achird -- Friendly	Zubenelgenubi -- Casual	Vindemiatrix -- Gentle
Sadachbia -- Lively	Sadaltager -- Knowledgeable	Sulafat -- Warm
You can hear all the voice options in AI Studio.

Supported languages
The TTS models detect the input language automatically. They support the following 24 languages:

Language	BCP-47 Code	Language	BCP-47 Code
Arabic (Egyptian)	ar-EG	German (Germany)	de-DE
English (US)	en-US	Spanish (US)	es-US
French (France)	fr-FR	Hindi (India)	hi-IN
Indonesian (Indonesia)	id-ID	Italian (Italy)	it-IT
Japanese (Japan)	ja-JP	Korean (Korea)	ko-KR
Portuguese (Brazil)	pt-BR	Russian (Russia)	ru-RU
Dutch (Netherlands)	nl-NL	Polish (Poland)	pl-PL
Thai (Thailand)	th-TH	Turkish (Turkey)	tr-TR
Vietnamese (Vietnam)	vi-VN	Romanian (Romania)	ro-RO
Ukrainian (Ukraine)	uk-UA	Bengali (Bangladesh)	bn-BD
English (India)	en-IN & hi-IN bundle	Marathi (India)	mr-IN
Tamil (India)	ta-IN	Telugu (India)	te-IN
Supported models
Model	Single speaker	Multispeaker
Gemini 2.5 Flash Preview TTS	✔️	✔️
Gemini 2.5 Pro Preview TTS	✔️	✔️
Limitations
TTS models can only receive text inputs and generate audio outputs.
A TTS session has a context window limit of 32k tokens.
Review Languages section for language support.
What's next
Try the audio generation cookbook.
Gemini's Live API offers interactive audio generation options you can interleave with other modalities.
For working with audio inputs, visit the Audio understanding guide.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackLong context

Many Gemini models come with large context windows of 1 million or more tokens. Historically, large language models (LLMs) were significantly limited by the amount of text (or tokens) that could be passed to the model at one time. The Gemini long context window unlocks many new use cases and developer paradigms.

The code you already use for cases like text generation or multimodal inputs will work without any changes with long context.

This document gives you an overview of what you can achieve using models with context windows of 1M and more tokens. The page gives a brief overview of a context window, and explores how developers should think about long context, various real world use cases for long context, and ways to optimize the usage of long context.

For the context window sizes of specific models, see the Models page.

What is a context window?
The basic way you use the Gemini models is by passing information (context) to the model, which will subsequently generate a response. An analogy for the context window is short term memory. There is a limited amount of information that can be stored in someone's short term memory, and the same is true for generative models.

You can read more about how models work under the hood in our generative models guide.

Getting started with long context
Earlier versions of generative models were only able to process 8,000 tokens at a time. Newer models pushed this further by accepting 32,000 or even 128,000 tokens. Gemini is the first model capable of accepting 1 million tokens.

In practice, 1 million tokens would look like:

50,000 lines of code (with the standard 80 characters per line)
All the text messages you have sent in the last 5 years
8 average length English novels
Transcripts of over 200 average length podcast episodes
The more limited context windows common in many other models often require strategies like arbitrarily dropping old messages, summarizing content, using RAG with vector databases, or filtering prompts to save tokens.

While these techniques remain valuable in specific scenarios, Gemini's extensive context window invites a more direct approach: providing all relevant information upfront. Because Gemini models were purpose-built with massive context capabilities, they demonstrate powerful in-context learning. For example, using only in-context instructional materials (a 500-page reference grammar, a dictionary, and ≈400 parallel sentences), Gemini learned to translate from English to Kalamang—a Papuan language with fewer than 200 speakers—with quality similar to a human learner using the same materials. This illustrates the paradigm shift enabled by Gemini's long context, empowering new possibilities through robust in-context learning.

Long context use cases
While the standard use case for most generative models is still text input, the Gemini model family enables a new paradigm of multimodal use cases. These models can natively understand text, video, audio, and images. They are accompanied by the Gemini API that takes in multimodal file types for convenience.

Long form text
Text has proved to be the layer of intelligence underpinning much of the momentum around LLMs. As mentioned earlier, much of the practical limitation of LLMs was because of not having a large enough context window to do certain tasks. This led to the rapid adoption of retrieval augmented generation (RAG) and other techniques which dynamically provide the model with relevant contextual information. Now, with larger and larger context windows, there are new techniques becoming available which unlock new use cases.

Some emerging and standard use cases for text based long context include:

Summarizing large corpuses of text
Previous summarization options with smaller context models would require a sliding window or another technique to keep state of previous sections as new tokens are passed to the model
Question and answering
Historically this was only possible with RAG given the limited amount of context and models' factual recall being low
Agentic workflows
Text is the underpinning of how agents keep state of what they have done and what they need to do; not having enough information about the world and the agent's goal is a limitation on the reliability of agents
Many-shot in-context learning is one of the most unique capabilities unlocked by long context models. Research has shown that taking the common "single shot" or "multi-shot" example paradigm, where the model is presented with one or a few examples of a task, and scaling that up to hundreds, thousands, or even hundreds of thousands of examples, can lead to novel model capabilities. This many-shot approach has also been shown to perform similarly to models which were fine-tuned for a specific task. For use cases where a Gemini model's performance is not yet sufficient for a production rollout, you can try the many-shot approach. As you might explore later in the long context optimization section, context caching makes this type of high input token workload much more economically feasible and even lower latency in some cases.

Long form video
Video content's utility has long been constrained by the lack of accessibility of the medium itself. It was hard to skim the content, transcripts often failed to capture the nuance of a video, and most tools don't process image, text, and audio together. With Gemini, the long-context text capabilities translate to the ability to reason and answer questions about multimodal inputs with sustained performance.

Some emerging and standard use cases for video long context include:

Video question and answering
Video memory, as shown with Google's Project Astra
Video captioning
Video recommendation systems, by enriching existing metadata with new multimodal understanding
Video customization, by looking at a corpus of data and associated video metadata and then removing parts of videos that are not relevant to the viewer
Video content moderation
Real-time video processing
When working with videos, it is important to consider how the videos are processed into tokens, which affects billing and usage limits. You can learn more about prompting with video files in the Prompting guide.

Long form audio
The Gemini models were the first natively multimodal large language models that could understand audio. Historically, the typical developer workflow would involve stringing together multiple domain specific models, like a speech-to-text model and a text-to-text model, in order to process audio. This led to additional latency required by performing multiple round-trip requests and decreased performance usually attributed to disconnected architectures of the multiple model setup.

Some emerging and standard use cases for audio context include:

Real-time transcription and translation
Podcast / video question and answering
Meeting transcription and summarization
Voice assistants
You can learn more about prompting with audio files in the Prompting guide.

Long context optimizations
The primary optimization when working with long context and the Gemini models is to use context caching. Beyond the previous impossibility of processing lots of tokens in a single request, the other main constraint was the cost. If you have a "chat with your data" app where a user uploads 10 PDFs, a video, and some work documents, you would historically have to work with a more complex retrieval augmented generation (RAG) tool / framework in order to process these requests and pay a significant amount for tokens moved into the context window. Now, you can cache the files the user uploads and pay to store them on a per hour basis. The input / output cost per request with Gemini Flash for example is ~4x less than the standard input / output cost, so if the user chats with their data enough, it becomes a huge cost saving for you as the developer.

Long context limitations
In various sections of this guide, we talked about how Gemini models achieve high performance across various needle-in-a-haystack retrieval evals. These tests consider the most basic setup, where you have a single needle you are looking for. In cases where you might have multiple "needles" or specific pieces of information you are looking for, the model does not perform with the same accuracy. Performance can vary to a wide degree depending on the context. This is important to consider as there is an inherent tradeoff between getting the right information retrieved and cost. You can get ~99% on a single query, but you have to pay the input token cost every time you send that query. So for 100 pieces of information to be retrieved, if you needed 99% performance, you would likely need to send 100 requests. This is a good example of where context caching can significantly reduce the cost associated with using Gemini models while keeping the performance high.

FAQs
Where is the best place to put my query in the context window?
In most cases, especially if the total context is long, the model's performance will be better if you put your query / question at the end of the prompt (after all the other context).

Do I lose model performance when I add more tokens to a query?
Generally, if you don't need tokens to be passed to the model, it is best to avoid passing them. However, if you have a large chunk of tokens with some information and want to ask questions about that information, the model is highly capable of extracting that information (up to 99% accuracy in many cases).

How can I lower my cost with long-context queries?
If you have a similar set of tokens / context that you want to re-use many times, context caching can help reduce the costs associated with asking questions about that information.

Does the context length affect the model latency?
There is some fixed amount of latency in any given request, regardless of the size, but generally longer queries will have higher latency (time to first token).

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackStructured output

You can configure Gemini for structured output instead of unstructured text, allowing precise extraction and standardization of information for further processing. For example, you can use structured output to extract information from resumes, standardize them to build a structured database.

Gemini can generate either JSON or enum values as structured output.

Generating JSON
To constrain the model to generate JSON, configure a responseSchema. The model will then respond to any prompt with JSON-formatted output.

Python
JavaScript
Go
REST

from google import genai
from pydantic import BaseModel

class Recipe(BaseModel):
    recipe_name: str
    ingredients: list[str]

client = genai.Client()
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="List a few popular cookie recipes, and include the amounts of ingredients.",
    config={
        "response_mime_type": "application/json",
        "response_schema": list[Recipe],
    },
)
# Use the response as a JSON string.
print(response.text)

# Use instantiated objects.
my_recipes: list[Recipe] = response.parsed
Note: Pydantic validators are not yet supported. If a pydantic.ValidationError occurs, it is suppressed, and .parsed may be empty/null.
The output might look like this:

[
  {
    "recipeName": "Chocolate Chip Cookies",
    "ingredients": [
      "1 cup (2 sticks) unsalted butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "1 teaspoon vanilla extract",
      "2 large eggs",
      "2 1/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 teaspoon salt",
      "2 cups chocolate chips"
    ]
  },
  ...
]
Generating enum values
In some cases you might want the model to choose a single option from a list of options. To implement this behavior, you can pass an enum in your schema. You can use an enum option anywhere you could use a string in the responseSchema, because an enum is an array of strings. Like a JSON schema, an enum lets you constrain model output to meet the requirements of your application.

For example, assume that you're developing an application to classify musical instruments into one of five categories: "Percussion", "String", "Woodwind", "Brass", or ""Keyboard"". You could create an enum to help with this task.

In the following example, you pass an enum as the responseSchema, constraining the model to choose the most appropriate option.

Python
JavaScript
REST
from google import genai
import enum

class Instrument(enum.Enum):
  PERCUSSION = "Percussion"
  STRING = "String"
  WOODWIND = "Woodwind"
  BRASS = "Brass"
  KEYBOARD = "Keyboard"

client = genai.Client()
response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents='What type of instrument is an oboe?',
    config={
        'response_mime_type': 'text/x.enum',
        'response_schema': Instrument,
    },
)

print(response.text)
# Woodwind
The Python library will translate the type declarations for the API. However, the API accepts a subset of the OpenAPI 3.0 schema (Schema).

There are two other ways to specify an enumeration. You can use a Literal: ```

Python
Literal["Percussion", "String", "Woodwind", "Brass", "Keyboard"]
And you can also pass the schema as JSON:

Python
from google import genai

client = genai.Client()
response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents='What type of instrument is an oboe?',
    config={
        'response_mime_type': 'text/x.enum',
        'response_schema': {
            "type": "STRING",
            "enum": ["Percussion", "String", "Woodwind", "Brass", "Keyboard"],
        },
    },
)

print(response.text)
# Woodwind
Beyond basic multiple choice problems, you can use an enum anywhere in a JSON schema. For example, you could ask the model for a list of recipe titles and use a Grade enum to give each title a popularity grade:

Python
from google import genai

import enum
from pydantic import BaseModel

class Grade(enum.Enum):
    A_PLUS = "a+"
    A = "a"
    B = "b"
    C = "c"
    D = "d"
    F = "f"

class Recipe(BaseModel):
  recipe_name: str
  rating: Grade

client = genai.Client()
response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents='List 10 home-baked cookie recipes and give them grades based on tastiness.',
    config={
        'response_mime_type': 'application/json',
        'response_schema': list[Recipe],
    },
)

print(response.text)
The response might look like this:

[
  {
    "recipe_name": "Chocolate Chip Cookies",
    "rating": "a+"
  },
  {
    "recipe_name": "Peanut Butter Cookies",
    "rating": "a"
  },
  {
    "recipe_name": "Oatmeal Raisin Cookies",
    "rating": "b"
  },
  ...
]
About JSON schemas
Configuring the model for JSON output using responseSchema parameter relies on Schema object to define its structure. This object represents a select subset of the OpenAPI 3.0 Schema object, and also adds a propertyOrdering field.

Tip: On Python, when you use a Pydantic model, you don't need to directly work with Schema objects, as it gets automatically converted to the corresponding JSON schema. To learn more, see JSON schemas in Python.
Here's a pseudo-JSON representation of all the Schema fields:

{
  "type": enum (Type),
  "format": string,
  "description": string,
  "nullable": boolean,
  "enum": [
    string
  ],
  "maxItems": integer,
  "minItems": integer,
  "properties": {
    string: {
      object (Schema)
    },
    ...
  },
  "required": [
    string
  ],
  "propertyOrdering": [
    string
  ],
  "items": {
    object (Schema)
  }
}
The Type of the schema must be one of the OpenAPI Data Types, or a union of those types (using anyOf). Only a subset of fields is valid for each Type. The following list maps each Type to a subset of the fields that are valid for that type:

string -> enum, format, nullable
integer -> format, minimum, maximum, enum, nullable
number -> format, minimum, maximum, enum, nullable
boolean -> nullable
array -> minItems, maxItems, items, nullable
object -> properties, required, propertyOrdering, nullable
Here are some example schemas showing valid type-and-field combinations:

{ "type": "string", "enum": ["a", "b", "c"] }

{ "type": "string", "format": "date-time" }

{ "type": "integer", "format": "int64" }

{ "type": "number", "format": "double" }

{ "type": "boolean" }

{ "type": "array", "minItems": 3, "maxItems": 3, "items": { "type": ... } }

{ "type": "object",
  "properties": {
    "a": { "type": ... },
    "b": { "type": ... },
    "c": { "type": ... }
  },
  "nullable": true,
  "required": ["c"],
  "propertyOrdering": ["c", "b", "a"]
}
For complete documentation of the Schema fields as they're used in the Gemini API, see the Schema reference.

Property ordering
Warning: When you're configuring a JSON schema, make sure to set propertyOrdering[], and when you provide examples, make sure that the property ordering in the examples matches the schema.
When you're working with JSON schemas in the Gemini API, the order of properties is important. By default, the API orders properties alphabetically and does not preserve the order in which the properties are defined (although the Google Gen AI SDKs may preserve this order). If you're providing examples to the model with a schema configured, and the property ordering of the examples is not consistent with the property ordering of the schema, the output could be rambling or unexpected.

To ensure a consistent, predictable ordering of properties, you can use the optional propertyOrdering[] field.

"propertyOrdering": ["recipeName", "ingredients"]
propertyOrdering[] – not a standard field in the OpenAPI specification – is an array of strings used to determine the order of properties in the response. By specifying the order of properties and then providing examples with properties in that same order, you can potentially improve the quality of results. propertyOrdering is only supported when you manually create types.Schema.

Schemas in Python
When you're using the Python library, the value of response_schema must be one of the following:

A type, as you would use in a type annotation (see the Python typing module)
An instance of genai.types.Schema
The dict equivalent of genai.types.Schema
The easiest way to define a schema is with a Pydantic type (as shown in the previous example):

Python
config={'response_mime_type': 'application/json',
        'response_schema': list[Recipe]}
When you use a Pydantic type, the Python library builds out a JSON schema for you and sends it to the API. For additional examples, see the Python library docs.

The Python library supports schemas defined with the following types (where AllowedType is any allowed type):

int
float
bool
str
list[AllowedType]
AllowedType|AllowedType|...
For structured types:
dict[str, AllowedType]. This annotation declares all dict values to be the same type, but doesn't specify what keys should be included.
User-defined Pydantic models. This approach lets you specify the key names and define different types for the values associated with each of the keys, including nested structures.
JSON Schema support
JSON Schema is a more recent specification than OpenAPI 3.0, which the Schema object is based on. Support for JSON Schema is available as a preview using the field responseJsonSchema which accepts any JSON Schema with the following limitations:

It only works with Gemini 2.5.
While all JSON Schema properties can be passed, not all are supported. See the documentation for the field for more details.
Recursive references can only be used as the value of a non-required object property.
Recursive references are unrolled to a finite degree, based on the size of the schema.
Schemas that contain $ref cannot contain any properties other than those starting with a $.
Here's an example of generating a JSON Schema with Pydantic and submitting it to the model:

curl "https://generativelanguage.googleapis.com/v1alpha/models/\
gemini-2.5-flash:generateContent" \
    -H "x-goog-api-key: $GEMINI_API_KEY"\
    -H 'Content-Type: application/json' \
    -d @- <<EOF
{
  "contents": [{
    "parts":[{
      "text": "Please give a random example following this schema"
    }]
  }],
  "generationConfig": {
    "response_mime_type": "application/json",
    "response_json_schema": $(python3 - << PYEOF
    from enum import Enum
    from typing import List, Optional, Union, Set
    from pydantic import BaseModel, Field, ConfigDict
    import json

    class UserRole(str, Enum):
        ADMIN = "admin"
        VIEWER = "viewer"

    class Address(BaseModel):
        street: str
        city: str

    class UserProfile(BaseModel):
        username: str = Field(description="User's unique name")
        age: Optional[int] = Field(ge=0, le=120)
        roles: Set[UserRole] = Field(min_items=1)
        contact: Union[Address, str]
        model_config = ConfigDict(title="User Schema")

    # Generate and print the JSON Schema
    print(json.dumps(UserProfile.model_json_schema(), indent=2))
    PYEOF
    )
  }
}
EOF
Passing JSON Schema directly is not yet supported when using the SDK.

Best practices
Keep the following considerations and best practices in mind when you're using a response schema:

The size of your response schema counts towards the input token limit.
By default, fields are optional, meaning the model can populate the fields or skip them. You can set fields as required to force the model to provide a value. If there's insufficient context in the associated input prompt, the model generates responses mainly based on the data it was trained on.
A complex schema can result in an InvalidArgument: 400 error. Complexity might come from long property names, long array length limits, enums with many values, objects with lots of optional properties, or a combination of these factors.

If you get this error with a valid schema, make one or more of the following changes to resolve the error:

Shorten property names or enum names.
Flatten nested arrays.
Reduce the number of properties with constraints, such as numbers with minimum and maximum limits.
Reduce the number of properties with complex constraints, such as properties with complex formats like date-time.
Reduce the number of optional properties.
Reduce the number of valid values for enums.
If you aren't seeing the results you expect, add more context to your input prompts or revise your response schema. For example, review the model's response without structured output to see how the model responds. You can then update your response schema so that it better fits the model's output. For additional troubleshooting tips on structured output, see the troubleshooting guide.

What's next
Now that you've learned how to generate structured output, you might want to try using Gemini API tools:

Function calling
Code execution
Grounding with Google Search
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackGemini thinking

The Gemini 2.5 series models use an internal "thinking process" that significantly improves their reasoning and multi-step planning abilities, making them highly effective for complex tasks such as coding, advanced mathematics, and data analysis.

This guide shows you how to work with Gemini's thinking capabilities using the Gemini API.

Before you begin
Ensure you use a supported 2.5 series model for thinking. You might find it beneficial to explore these models in AI Studio before diving into the API:

Try Gemini 2.5 Flash in AI Studio
Try Gemini 2.5 Pro in AI Studio
Try Gemini 2.5 Flash-Lite in AI Studio
Generating content with thinking
Initiating a request with a thinking model is similar to any other content generation request. The key difference lies in specifying one of the models with thinking support in the model field, as demonstrated in the following text generation example:

Python
JavaScript
Go
REST
from google import genai

client = genai.Client()
prompt = "Explain the concept of Occam's Razor and provide a simple, everyday example."
response = client.models.generate_content(
    model="gemini-2.5-pro",
    contents=prompt
)

print(response.text)
Thinking budgets
The thinkingBudget parameter guides the model on the number of thinking tokens to use when generating a response. A higher token count generally allows for more detailed reasoning, which can be beneficial for tackling more complex tasks. If latency is more important, use a lower budget or disable thinking by setting thinkingBudget to 0. Setting the thinkingBudget to -1 turns on dynamic thinking, meaning the model will adjust the budget based on the complexity of the request.

The thinkingBudget is only supported in Gemini 2.5 Flash, 2.5 Pro, and 2.5 Flash-Lite. Depending on the prompt, the model might overflow or underflow the token budget.

The following are thinkingBudget configuration details for each model type.

Model	Default setting
(Thinking budget is not set)	Range	Disable thinking	Turn on dynamic thinking
2.5 Pro	Dynamic thinking: Model decides when and how much to think	128 to 32768	N/A: Cannot disable thinking	thinkingBudget = -1
2.5 Flash	Dynamic thinking: Model decides when and how much to think	0 to 24576	thinkingBudget = 0	thinkingBudget = -1
2.5 Flash Preview	Dynamic thinking: Model decides when and how much to think	0 to 24576	thinkingBudget = 0	thinkingBudget = -1
2.5 Flash Lite	Model does not think	512 to 24576	thinkingBudget = 0	thinkingBudget = -1
2.5 Flash Lite Preview	Model does not think	512 to 24576	thinkingBudget = 0	thinkingBudget = -1
Robotics-ER 1.5 Preview	Dynamic thinking: Model decides when and how much to think	0 to 24576	thinkingBudget = 0	thinkingBudget = -1
2.5 Flash Live Native Audio Preview (09-2025)	Dynamic thinking: Model decides when and how much to think	0 to 24576	thinkingBudget = 0	thinkingBudget = -1
Python
JavaScript
Go
REST
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-pro",
    contents="Provide a list of 3 famous physicists and their key contributions",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_budget=1024)
        # Turn off thinking:
        # thinking_config=types.ThinkingConfig(thinking_budget=0)
        # Turn on dynamic thinking:
        # thinking_config=types.ThinkingConfig(thinking_budget=-1)
    ),
)

print(response.text)
Thought summaries
Thought summaries are synthesized versions of the model's raw thoughts and offer insights into the model's internal reasoning process. Note that thinking budgets apply to the model's raw thoughts and not to thought summaries.

You can enable thought summaries by setting includeThoughts to true in your request configuration. You can then access the summary by iterating through the response parameter's parts, and checking the thought boolean.

Here's an example demonstrating how to enable and retrieve thought summaries without streaming, which returns a single, final thought summary with the response:

Python
JavaScript
Go
from google import genai
from google.genai import types

client = genai.Client()
prompt = "What is the sum of the first 50 prime numbers?"
response = client.models.generate_content(
  model="gemini-2.5-pro",
  contents=prompt,
  config=types.GenerateContentConfig(
    thinking_config=types.ThinkingConfig(
      include_thoughts=True
    )
  )
)

for part in response.candidates[0].content.parts:
  if not part.text:
    continue
  if part.thought:
    print("Thought summary:")
    print(part.text)
    print()
  else:
    print("Answer:")
    print(part.text)
    print()

And here is an example using thinking with streaming, which returns rolling, incremental summaries during generation:

Python
JavaScript
Go
from google import genai
from google.genai import types

client = genai.Client()

prompt = """
Alice, Bob, and Carol each live in a different house on the same street: red, green, and blue.
The person who lives in the red house owns a cat.
Bob does not live in the green house.
Carol owns a dog.
The green house is to the left of the red house.
Alice does not own a cat.
Who lives in each house, and what pet do they own?
"""

thoughts = ""
answer = ""

for chunk in client.models.generate_content_stream(
    model="gemini-2.5-pro",
    contents=prompt,
    config=types.GenerateContentConfig(
      thinking_config=types.ThinkingConfig(
        include_thoughts=True
      )
    )
):
  for part in chunk.candidates[0].content.parts:
    if not part.text:
      continue
    elif part.thought:
      if not thoughts:
        print("Thoughts summary:")
      print(part.text)
      thoughts += part.text
    else:
      if not answer:
        print("Answer:")
      print(part.text)
      answer += part.text
Thought signatures
Because standard Gemini API text and content generation calls are stateless, when using thinking in multi-turn interactions (such as chat), the model doesn't have access to thought context from previous turns.

You can maintain thought context using thought signatures, which are encrypted representations of the model's internal thought process. The model returns thought signatures in the response object when thinking and function calling are enabled. To ensure the model maintains context across multiple turns of a conversation, you must provide the thought signatures back to the model in the subsequent requests.

You will receive thought signatures when:

Thinking is enabled and thoughts are generated.
The request includes function declarations.
Note: Thought signatures are only available when you're using function calling, specifically, your request must include function declarations.
You can find an example of thinking with function calls on the Function calling page.

Other usage limitations to consider with function calling include:

Signatures are returned from the model within other parts in the response, for example function calling or text parts. Return the entire response with all parts back to the model in subsequent turns.
Don't concatenate parts with signatures together.
Don't merge one part with a signature with another part without a signature.
Pricing
Note: Summaries are available in the free and paid tiers of the API. Thought signatures will increase the input tokens you are charged when sent back as part of the request.
When thinking is turned on, response pricing is the sum of output tokens and thinking tokens. You can get the total number of generated thinking tokens from the thoughtsTokenCount field.

Python
JavaScript
Go
# ...
print("Thoughts tokens:",response.usage_metadata.thoughts_token_count)
print("Output tokens:",response.usage_metadata.candidates_token_count)
Thinking models generate full thoughts to improve the quality of the final response, and then output summaries to provide insight into the thought process. So, pricing is based on the full thought tokens the model needs to generate to create a summary, despite only the summary being output from the API.

You can learn more about tokens in the Token counting guide.

Supported models
Thinking features are supported on all the 2.5 series models. You can find all model capabilities on the model overview page.

Best practices
This section includes some guidance for using thinking models efficiently. As always, following our prompting guidance and best practices will get you the best results.

Debugging and steering
Review reasoning: When you're not getting your expected response from the thinking models, it can help to carefully analyze Gemini's thought summaries. You can see how it broke down the task and arrived at its conclusion, and use that information to correct towards the right results.

Provide Guidance in Reasoning: If you're hoping for a particularly lengthy output, you may want to provide guidance in your prompt to constrain the amount of thinking the model uses. This lets you reserve more of the token output for your response.

Task complexity
Easy Tasks (Thinking could be OFF): For straightforward requests where complex reasoning isn't required, such as fact retrieval or classification, thinking is not required. Examples include:
"Where was DeepMind founded?"
"Is this email asking for a meeting or just providing information?"
Medium Tasks (Default/Some Thinking): Many common requests benefit from a degree of step-by-step processing or deeper understanding. Gemini can flexibly use thinking capability for tasks like:
Analogize photosynthesis and growing up.
Compare and contrast electric cars and hybrid cars.
Hard Tasks (Maximum Thinking Capability): For truly complex challenges, such as solving complex math problems or coding tasks, we recommend setting a high thinking budget. These types of tasks require the model to engage its full reasoning and planning capabilities, often involving many internal steps before providing an answer. Examples include:
Solve problem 1 in AIME 2025: Find the sum of all integer bases b > 9 for which 17b is a divisor of 97b.
Write Python code for a web application that visualizes real-time stock market data, including user authentication. Make it as efficient as possible.
Thinking with tools and capabilities
Thinking models work with all of Gemini's tools and capabilities. This allows the models to interact with external systems, execute code, or access real-time information, incorporating the results into their reasoning and final response.

The search tool allows the model to query Google Search to find up-to-date information or information beyond its training data. This is useful for questions about recent events or highly specific topics.

The code execution tool enables the model to generate and run Python code to perform calculations, manipulate data, or solve problems that are best handled algorithmically. The model receives the code's output and can use it in its response.

With structured output, you can constrain Gemini to respond with JSON. This is particularly useful for integrating the model's output into applications.

Function calling connects the thinking model to external tools and APIs, so it can reason about when to call the right function and what parameters to provide.

URL Context provides the model with URLs as additional context for your prompt. The model can then retrieve content from the URLs and use that content to inform and shape its response.

You can try examples of using tools with thinking models in the Thinking cookbook.

What's next?
To work through more in depth examples, like:

Using tools with thinking
Streaming with thinking
Adjusting the thinking budget for different results
and more, try our Thinking cookbook.

Thinking coverage is now available in our OpenAI Compatibility guide.

For more info about Gemini 2.5 Pro, Gemini Flash 2.5, and Gemini 2.5 Flash-Lite, visit the model page.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-02 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackDocument understanding

Gemini models can process documents in PDF format, using native vision to understand entire document contexts. This goes beyond simple text extraction, allowing Gemini to:

Analyze and interpret content, including text, images, diagrams, charts, and tables, even in long documents up to 1000 pages.
Extract information into structured output formats.
Summarize and answer questions based on both the visual and textual elements in a document.
Transcribe document content (e.g. to HTML), preserving layouts and formatting, for use in downstream applications.
Passing inline PDF data
You can pass inline PDF data in the request to generateContent. For PDF payloads under 20MB, you can choose between uploading base64 encoded documents or directly uploading locally stored files.

The following example shows you how to fetch a PDF from a URL and convert it to bytes for processing:

Python
JavaScript
Go
REST
from google import genai
from google.genai import types
import httpx

client = genai.Client()

doc_url = "https://discovery.ucl.ac.uk/id/eprint/10089234/1/343019_3_art_0_py4t4l_convrt.pdf"

# Retrieve and encode the PDF byte
doc_data = httpx.get(doc_url).content

prompt = "Summarize this document"
response = client.models.generate_content(
  model="gemini-2.5-flash",
  contents=[
      types.Part.from_bytes(
        data=doc_data,
        mime_type='application/pdf',
      ),
      prompt])
print(response.text)
You can also read a PDF from a local file for processing:

Python
JavaScript
Go
from google import genai
from google.genai import types
import pathlib

client = genai.Client()

# Retrieve and encode the PDF byte
filepath = pathlib.Path('file.pdf')

prompt = "Summarize this document"
response = client.models.generate_content(
  model="gemini-2.5-flash",
  contents=[
      types.Part.from_bytes(
        data=filepath.read_bytes(),
        mime_type='application/pdf',
      ),
      prompt])
print(response.text)
Uploading PDFs using the File API
You can use the File API to upload larger documents. Always use the File API when the total request size (including the files, text prompt, system instructions, etc.) is larger than 20MB.

Note: The File API lets you store up to 50MB of PDF files. Files are stored for 48 hours. You can access them in that period with your API key, but you can't download them from the API. The File API is available at no cost in all regions where the Gemini API is available.
Call media.upload to upload a file using the File API. The following code uploads a document file and then uses the file in a call to models.generateContent.

Large PDFs from URLs
Use the File API to simplify uploading and processing large PDF files from URLs:

Python
JavaScript
Go
REST
from google import genai
from google.genai import types
import io
import httpx

client = genai.Client()

long_context_pdf_path = "https://www.nasa.gov/wp-content/uploads/static/history/alsj/a17/A17_FlightPlan.pdf"

# Retrieve and upload the PDF using the File API
doc_io = io.BytesIO(httpx.get(long_context_pdf_path).content)

sample_doc = client.files.upload(
  # You can pass a path or a file-like object here
  file=doc_io,
  config=dict(
    mime_type='application/pdf')
)

prompt = "Summarize this document"

response = client.models.generate_content(
  model="gemini-2.5-flash",
  contents=[sample_doc, prompt])
print(response.text)
Large PDFs stored locally
Python
JavaScript
Go
REST
from google import genai
from google.genai import types
import pathlib
import httpx

client = genai.Client()

# Retrieve and encode the PDF byte
file_path = pathlib.Path('large_file.pdf')

# Upload the PDF using the File API
sample_file = client.files.upload(
  file=file_path,
)

prompt="Summarize this document"

response = client.models.generate_content(
  model="gemini-2.5-flash",
  contents=[sample_file, "Summarize this document"])
print(response.text)
You can verify the API successfully stored the uploaded file and get its metadata by calling files.get. Only the name (and by extension, the uri) are unique.

Python
REST
from google import genai
import pathlib

client = genai.Client()

fpath = pathlib.Path('example.txt')
fpath.write_text('hello')

file = client.files.upload(file='example.txt')

file_info = client.files.get(name=file.name)
print(file_info.model_dump_json(indent=4))
Passing multiple PDFs
The Gemini API is capable of processing multiple PDF documents (up to 1000 pages) in a single request, as long as the combined size of the documents and the text prompt stays within the model's context window.

Python
JavaScript
Go
REST
from google import genai
import io
import httpx

client = genai.Client()

doc_url_1 = "https://arxiv.org/pdf/2312.11805"
doc_url_2 = "https://arxiv.org/pdf/2403.05530"

# Retrieve and upload both PDFs using the File API
doc_data_1 = io.BytesIO(httpx.get(doc_url_1).content)
doc_data_2 = io.BytesIO(httpx.get(doc_url_2).content)

sample_pdf_1 = client.files.upload(
  file=doc_data_1,
  config=dict(mime_type='application/pdf')
)
sample_pdf_2 = client.files.upload(
  file=doc_data_2,
  config=dict(mime_type='application/pdf')
)

prompt = "What is the difference between each of the main benchmarks between these two papers? Output these in a table."

response = client.models.generate_content(
  model="gemini-2.5-flash",
  contents=[sample_pdf_1, sample_pdf_2, prompt])
print(response.text)
Technical details
Gemini supports a maximum of 1,000 document pages. Each document page is equivalent to 258 tokens.

While there are no specific limits to the number of pixels in a document besides the model's context window, larger pages are scaled down to a maximum resolution of 3072x3072 while preserving their original aspect ratio, while smaller pages are scaled up to 768x768 pixels. There is no cost reduction for pages at lower sizes, other than bandwidth, or performance improvement for pages at higher resolution.

Document types
Technically, you can pass other MIME types for document understanding, like TXT, Markdown, HTML, XML, etc. However, document vision only meaningfully understands PDFs. Other types will be extracted as pure text, and the model won't be able to interpret what we see in the rendering of those files. Any file-type specifics like charts, diagrams, HTML tags, Markdown formatting, etc., will be lost.

Best practices
For best results:

Rotate pages to the correct orientation before uploading.
Avoid blurry pages.
If using a single page, place the text prompt after the page.
What's next
To learn more, see the following resources:

File prompting strategies: The Gemini API supports prompting with text, image, audio, and video data, also known as multimodal prompting.
System instructions: System instructions let you steer the behavior of the model based on your specific needs and use cases.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackImage understanding

Gemini models are built to be multimodal from the ground up, unlocking a wide range of image processing and computer vision tasks including but not limited to image captioning, classification, and visual question answering without having to train specialized ML models.

Tip: In addition to their general multimodal capabilities, Gemini models (2.0 and newer) offer improved accuracy for specific use cases like object detection and segmentation, through additional training. See the Capabilities section for more details.
Passing images to Gemini
You can provide images as input to Gemini using two methods:

Passing inline image data: Ideal for smaller files (total request size less than 20MB, including prompts).
Uploading images using the File API: Recommended for larger files or for reusing images across multiple requests.
Passing inline image data
You can pass inline image data in the request to generateContent. You can provide image data as Base64 encoded strings or by reading local files directly (depending on the language).

The following example shows how to read an image from a local file and pass it to generateContent API for processing.

Python
JavaScript
Go
REST
  from google import genai
  from google.genai import types

  with open('path/to/small-sample.jpg', 'rb') as f:
      image_bytes = f.read()

  client = genai.Client()
  response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents=[
      types.Part.from_bytes(
        data=image_bytes,
        mime_type='image/jpeg',
      ),
      'Caption this image.'
    ]
  )

  print(response.text)
You can also fetch an image from a URL, convert it to bytes, and pass it to generateContent as shown in the following examples.

Python
JavaScript
Go
REST
from google import genai
from google.genai import types

import requests

image_path = "https://goo.gle/instrument-img"
image_bytes = requests.get(image_path).content
image = types.Part.from_bytes(
  data=image_bytes, mime_type="image/jpeg"
)

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=["What is this image?", image],
)

print(response.text)
Note: Inline image data limits your total request size (text prompts, system instructions, and inline bytes) to 20MB. For larger requests, upload image files using the File API. Files API is also more efficient for scenarios that use the same image repeatedly.
Uploading images using the File API
For large files or to be able to use the same image file repeatedly, use the Files API. The following code uploads an image file and then uses the file in a call to generateContent. See the Files API guide for more information and examples.

Python
JavaScript
Go
REST
from google import genai

client = genai.Client()

my_file = client.files.upload(file="path/to/sample.jpg")

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=[my_file, "Caption this image."],
)

print(response.text)
Prompting with multiple images
You can provide multiple images in a single prompt by including multiple image Part objects in the contents array. These can be a mix of inline data (local files or URLs) and File API references.

Python
JavaScript
Go
REST
from google import genai
from google.genai import types

client = genai.Client()

# Upload the first image
image1_path = "path/to/image1.jpg"
uploaded_file = client.files.upload(file=image1_path)

# Prepare the second image as inline data
image2_path = "path/to/image2.png"
with open(image2_path, 'rb') as f:
    img2_bytes = f.read()

# Create the prompt with text and multiple images
response = client.models.generate_content(

    model="gemini-2.5-flash",
    contents=[
        "What is different between these two images?",
        uploaded_file,  # Use the uploaded file reference
        types.Part.from_bytes(
            data=img2_bytes,
            mime_type='image/png'
        )
    ]
)

print(response.text)
Object detection
From Gemini 2.0 onwards, models are further trained to detect objects in an image and get their bounding box coordinates. The coordinates, relative to image dimensions, scale to [0, 1000]. You need to descale these coordinates based on your original image size.

Python
from google import genai
from google.genai import types
from PIL import Image
import json

client = genai.Client()
prompt = "Detect the all of the prominent items in the image. The box_2d should be [ymin, xmin, ymax, xmax] normalized to 0-1000."

image = Image.open("/path/to/image.png")

config = types.GenerateContentConfig(
  response_mime_type="application/json"
  )

response = client.models.generate_content(model="gemini-2.5-flash",
                                          contents=[image, prompt],
                                          config=config
                                          )

width, height = image.size
bounding_boxes = json.loads(response.text)

converted_bounding_boxes = []
for bounding_box in bounding_boxes:
    abs_y1 = int(bounding_box["box_2d"][0]/1000 * height)
    abs_x1 = int(bounding_box["box_2d"][1]/1000 * width)
    abs_y2 = int(bounding_box["box_2d"][2]/1000 * height)
    abs_x2 = int(bounding_box["box_2d"][3]/1000 * width)
    converted_bounding_boxes.append([abs_x1, abs_y1, abs_x2, abs_y2])

print("Image size: ", width, height)
print("Bounding boxes:", converted_bounding_boxes)

Note: The model also supports generating bounding boxes based on custom instructions, such as: "Show bounding boxes of all green objects in this image". It also support custom labels like "label the items with the allergens they can contain".
For more examples, check following notebooks in the Gemini Cookbook:

2D spatial understanding notebook
Experimental 3D pointing notebook
Segmentation
Starting with Gemini 2.5, models not only detect items but also segment them and provide their contour masks.

The model predicts a JSON list, where each item represents a segmentation mask. Each item has a bounding box ("box_2d") in the format [y0, x0, y1, x1] with normalized coordinates between 0 and 1000, a label ("label") that identifies the object, and finally the segmentation mask inside the bounding box, as base64 encoded png that is a probability map with values between 0 and 255. The mask needs to be resized to match the bounding box dimensions, then binarized at your confidence threshold (127 for the midpoint).

Note: For better results, disable thinking by setting the thinking budget to 0. See code sample below for an example.
Python
from google import genai
from google.genai import types
from PIL import Image, ImageDraw
import io
import base64
import json
import numpy as np
import os

client = genai.Client()

def parse_json(json_output: str):
  # Parsing out the markdown fencing
  lines = json_output.splitlines()
  for i, line in enumerate(lines):
    if line == "```json":
      json_output = "\n".join(lines[i+1:])  # Remove everything before "```json"
      output = json_output.split("```")[0]  # Remove everything after the closing "```"
      break  # Exit the loop once "```json" is found
  return json_output

def extract_segmentation_masks(image_path: str, output_dir: str = "segmentation_outputs"):
  # Load and resize image
  im = Image.open(image_path)
  im.thumbnail([1024, 1024], Image.Resampling.LANCZOS)

  prompt = """
  Give the segmentation masks for the wooden and glass items.
  Output a JSON list of segmentation masks where each entry contains the 2D
  bounding box in the key "box_2d", the segmentation mask in key "mask", and
  the text label in the key "label". Use descriptive labels.
  """

  config = types.GenerateContentConfig(
    thinking_config=types.ThinkingConfig(thinking_budget=0) # set thinking_budget to 0 for better results in object detection
  )

  response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=[prompt, im], # Pillow images can be directly passed as inputs (which will be converted by the SDK)
    config=config
  )

  # Parse JSON response
  items = json.loads(parse_json(response.text))

  # Create output directory
  os.makedirs(output_dir, exist_ok=True)

  # Process each mask
  for i, item in enumerate(items):
      # Get bounding box coordinates
      box = item["box_2d"]
      y0 = int(box[0] / 1000 * im.size[1])
      x0 = int(box[1] / 1000 * im.size[0])
      y1 = int(box[2] / 1000 * im.size[1])
      x1 = int(box[3] / 1000 * im.size[0])

      # Skip invalid boxes
      if y0 >= y1 or x0 >= x1:
          continue

      # Process mask
      png_str = item["mask"]
      if not png_str.startswith("data:image/png;base64,"):
          continue

      # Remove prefix
      png_str = png_str.removeprefix("data:image/png;base64,")
      mask_data = base64.b64decode(png_str)
      mask = Image.open(io.BytesIO(mask_data))

      # Resize mask to match bounding box
      mask = mask.resize((x1 - x0, y1 - y0), Image.Resampling.BILINEAR)

      # Convert mask to numpy array for processing
      mask_array = np.array(mask)

      # Create overlay for this mask
      overlay = Image.new('RGBA', im.size, (0, 0, 0, 0))
      overlay_draw = ImageDraw.Draw(overlay)

      # Create overlay for the mask
      color = (255, 255, 255, 200)
      for y in range(y0, y1):
          for x in range(x0, x1):
              if mask_array[y - y0, x - x0] > 128:  # Threshold for mask
                  overlay_draw.point((x, y), fill=color)

      # Save individual mask and its overlay
      mask_filename = f"{item['label']}_{i}_mask.png"
      overlay_filename = f"{item['label']}_{i}_overlay.png"

      mask.save(os.path.join(output_dir, mask_filename))

      # Create and save overlay
      composite = Image.alpha_composite(im.convert('RGBA'), overlay)
      composite.save(os.path.join(output_dir, overlay_filename))
      print(f"Saved mask and overlay for {item['label']} to {output_dir}")

# Example usage
if __name__ == "__main__":
  extract_segmentation_masks("path/to/image.png")

Check the segmentation example in the cookbook guide for a more detailed example.

A table with cupcakes, with the wooden and glass objects highlighted
An example segmentation output with objects and segmentation masks
Supported image formats
Gemini supports the following image format MIME types:

PNG - image/png
JPEG - image/jpeg
WEBP - image/webp
HEIC - image/heic
HEIF - image/heif
Capabilities
All Gemini model versions are multimodal and can be utilized in a wide range of image processing and computer vision tasks including but not limited to image captioning, visual question and answering, image classification, object detection and segmentation.

Gemini can reduce the need to use specialized ML models depending on your quality and performance requirements.

Some later model versions are specifically trained improve accuracy of specialized tasks in addition to generic capabilities:

Gemini 2.0 models are further trained to support enhanced object detection.

Gemini 2.5 models are further trained to support enhanced segmentation in addition to object detection.

Limitations and key technical information
File limit
Gemini 2.5 Pro/Flash, 2.0 Flash, 1.5 Pro, and 1.5 Flash support a maximum of 3,600 image files per request.

Token calculation
Gemini 1.5 Flash and Gemini 1.5 Pro: 258 tokens if both dimensions <= 384 pixels. Larger images are tiled (min tile 256px, max 768px, resized to 768x768), with each tile costing 258 tokens.
Gemini 2.0 Flash and Gemini 2.5 Flash/Pro: 258 tokens if both dimensions <= 384 pixels. Larger images are tiled into 768x768 pixel tiles, each costing 258 tokens.
A rough formula for calculating the number of tiles is as follows:

Calculate the crop unit size which is roughly: floor(min(width, height) / 1.5).
Divide each dimension by the crop unit size and multiply together to get the number of tiles.
For example, for an image of dimensions 960x540 would have a crop unit size of 360. Divide each dimension by 360 and the number of tile is 3 * 2 = 6.

Tips and best practices
Verify that images are correctly rotated.
Use clear, non-blurry images.
When using a single image with text, place the text prompt after the image part in the contents array.
What's next
This guide shows you how to upload image files and generate text outputs from image inputs. To learn more, see the following resources:

Files API: Learn more about uploading and managing files for use with Gemini.
System instructions: System instructions let you steer the behavior of the model based on your specific needs and use cases.
File prompting strategies: The Gemini API supports prompting with text, image, audio, and video data, also known as multimodal prompting.
Safety guidance: Sometimes generative AI models produce unexpected outputs, such as outputs that are inaccurate, biased, or offensive. Post-processing and human evaluation are essential to limit the risk of harm from such outputs.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-26 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackVideo understanding

Gemini models can process videos, enabling many frontier developer use cases that would have historically required domain specific models. Some of Gemini's vision capabilities include the ability to:

Describe, segment, and extract information from videos
Answer questions about video content
Refer to specific timestamps within a video
Gemini was built to be multimodal from the ground up and we continue to push the frontier of what is possible. This guide shows how to use the Gemini API to generate text responses based on video inputs.

Video input
You can provide videos as input to Gemini in the following ways:

Upload a video file using the File API before making a request to generateContent. Use this method for files larger than 20MB, videos longer than approximately 1 minute, or when you want to reuse the file across multiple requests.
Pass inline video data with the request to generateContent. Use this method for smaller files (<20MB) and shorter durations.
Pass YouTube URLs as part of your generateContent request.
Upload a video file
You can use the Files API to upload a video file. Always use the Files API when the total request size (including the file, text prompt, system instructions, etc.) is larger than 20 MB, the video duration is significant, or if you intend to use the same video in multiple prompts. The File API accepts video file formats directly.

The following code downloads the sample video, uploads it using the File API, waits for it to be processed, and then uses the file reference in a generateContent request.

Python
JavaScript
Go
REST
from google import genai

client = genai.Client()

myfile = client.files.upload(file="path/to/sample.mp4")

response = client.models.generate_content(
    model="gemini-2.5-flash", contents=[myfile, "Summarize this video. Then create a quiz with an answer key based on the information in this video."]
)

print(response.text)
To learn more about working with media files, see Files API.

Pass video data inline
Instead of uploading a video file using the File API, you can pass smaller videos directly in the request to generateContent. This is suitable for shorter videos under 20MB total request size.

Here's an example of providing inline video data:

Python
JavaScript
REST
from google import genai
from google.genai import types

# Only for videos of size <20Mb
video_file_name = "/path/to/your/video.mp4"
video_bytes = open(video_file_name, 'rb').read()

client = genai.Client()
response = client.models.generate_content(
    model='models/gemini-2.5-flash',
    contents=types.Content(
        parts=[
            types.Part(
                inline_data=types.Blob(data=video_bytes, mime_type='video/mp4')
            ),
            types.Part(text='Please summarize the video in 3 sentences.')
        ]
    )
)
Pass YouTube URLs
Preview: The YouTube URL feature is in preview and is available at no charge. Pricing and rate limits are likely to change.
You can pass YouTube URLs directly to Gemini API as part of your generateContentrequest as follows:

Python
JavaScript
Go
REST
response = client.models.generate_content(
    model='models/gemini-2.5-flash',
    contents=types.Content(
        parts=[
            types.Part(
                file_data=types.FileData(file_uri='https://www.youtube.com/watch?v=9hE5-98ZeCg')
            ),
            types.Part(text='Please summarize the video in 3 sentences.')
        ]
    )
)
Limitations:

For the free tier, you can't upload more than 8 hours of YouTube video per day.
For the paid tier, there is no limit based on video length.
For models prior to Gemini 2.5, you can upload only 1 video per request. For Gemini 2.5 and later models, you can upload a maximum of 10 videos per request.
You can only upload public videos (not private or unlisted videos).
Refer to timestamps in the content
You can ask questions about specific points in time within the video using timestamps of the form MM:SS.

Python
JavaScript
Go
REST
prompt = "What are the examples given at 00:05 and 00:10 supposed to show us?" # Adjusted timestamps for the NASA video
Transcribe video and provide visual descriptions
The Gemini models can transcribe and provide visual descriptions of video content by processing both the audio track and visual frames. For visual descriptions, the model samples the video at a rate of 1 frame per second. This sampling rate may affect the level of detail in the descriptions, particularly for videos with rapidly changing visuals.

Python
JavaScript
Go
REST
prompt = "Transcribe the audio from this video, giving timestamps for salient events in the video. Also provide visual descriptions."
Customize video processing
You can customize video processing in the Gemini API by setting clipping intervals or providing custom frame rate sampling.

Tip: Video clipping and frames per second (FPS) are supported by all models, but the quality is significantly higher from 2.5 series models.
Set clipping intervals
You can clip video by specifying videoMetadata with start and end offsets.

Python
JavaScript
from google import genai
from google.genai import types

client = genai.Client()
response = client.models.generate_content(
    model='models/gemini-2.5-flash',
    contents=types.Content(
        parts=[
            types.Part(
                file_data=types.FileData(file_uri='https://www.youtube.com/watch?v=XEzRZ35urlk'),
                video_metadata=types.VideoMetadata(
                    start_offset='1250s',
                    end_offset='1570s'
                )
            ),
            types.Part(text='Please summarize the video in 3 sentences.')
        ]
    )
)
Set a custom frame rate
You can set custom frame rate sampling by passing an fps argument to videoMetadata.

Note: Due to built-in per image based safety checks, the same video may get blocked at some fps and not at others due to different extracted frames.
Python
from google import genai
from google.genai import types

# Only for videos of size <20Mb
video_file_name = "/path/to/your/video.mp4"
video_bytes = open(video_file_name, 'rb').read()

client = genai.Client()
response = client.models.generate_content(
    model='models/gemini-2.5-flash',
    contents=types.Content(
        parts=[
            types.Part(
                inline_data=types.Blob(
                    data=video_bytes,
                    mime_type='video/mp4'),
                video_metadata=types.VideoMetadata(fps=5)
            ),
            types.Part(text='Please summarize the video in 3 sentences.')
        ]
    )
)
By default 1 frame per second (FPS) is sampled from the video. You might want to set low FPS (< 1) for long videos. This is especially useful for mostly static videos (e.g. lectures). If you want to capture more details in rapidly changing visuals, consider setting a higher FPS value.

Supported video formats
Gemini supports the following video format MIME types:

video/mp4
video/mpeg
video/mov
video/avi
video/x-flv
video/mpg
video/webm
video/wmv
video/3gpp
Technical details about videos
Supported models & context: All Gemini 2.0 and 2.5 models can process video data.
Models with a 2M context window can process videos up to 2 hours long at default media resolution or 6 hours long at low media resolution, while models with a 1M context window can process videos up to 1 hour long at default media resolution or 3 hours long at low media resolution.
File API processing: When using the File API, videos are stored at 1 frame per second (FPS) and audio is processed at 1Kbps (single channel). Timestamps are added every second.
These rates are subject to change in the future for improvements in inference.
You can override the 1 FPS sampling rate by setting a custom frame rate.
Token calculation: Each second of video is tokenized as follows:
Individual frames (sampled at 1 FPS):
If mediaResolution is set to low, frames are tokenized at 66 tokens per frame.
Otherwise, frames are tokenized at 258 tokens per frame.
Audio: 32 tokens per second.
Metadata is also included.
Total: Approximately 300 tokens per second of video at default media resolution, or 100 tokens per second of video at low media resolution.
Timestamp format: When referring to specific moments in a video within your prompt, use the MM:SS format (e.g., 01:15 for 1 minute and 15 seconds).
Best practices:
Use only one video per prompt request for optimal results.
If combining text and a single video, place the text prompt after the video part in the contents array.
Be aware that fast action sequences might lose detail due to the 1 FPS sampling rate. Consider slowing down such clips if necessary.
What's next
This guide shows how to upload video files and generate text outputs from video inputs. To learn more, see the following resources:

System instructions: System instructions let you steer the behavior of the model based on your specific needs and use cases.
Files API: Learn more about uploading and managing files for use with Gemini.
File prompting strategies: The Gemini API supports prompting with text, image, audio, and video data, also known as multimodal prompting.
Safety guidance: Sometimes generative AI models produce unexpected outputs, such as outputs that are inaccurate, biased, or offensive. Post-processing and human evaluation are essential to limit the risk of harm from such outputs.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-30 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackAudio understanding

Gemini can analyze and understand audio input, enabling use cases like the following:

Describe, summarize, or answer questions about audio content.
Provide a transcription of the audio.
Analyze specific segments of the audio.
This guide shows you how to use the Gemini API to generate a text response to audio input.

Before you begin
Before calling the Gemini API, ensure you have your SDK of choice installed, and a Gemini API key configured and ready to use.

Input audio
You can provide audio data to Gemini in the following ways:

Upload an audio file before making a request to generateContent.
Pass inline audio data with the request to generateContent.
Upload an audio file
You can use the Files API to upload an audio file. Always use the Files API when the total request size (including the files, text prompt, system instructions, etc.) is larger than 20 MB.

The following code uploads an audio file and then uses the file in a call to generateContent.

Python
JavaScript
Go
REST
from google import genai

client = genai.Client()

myfile = client.files.upload(file="path/to/sample.mp3")

response = client.models.generate_content(
    model="gemini-2.5-flash", contents=["Describe this audio clip", myfile]
)

print(response.text)
To learn more about working with media files, see Files API.

Pass audio data inline
Instead of uploading an audio file, you can pass inline audio data in the request to generateContent:

Python
JavaScript
Go
from google import genai
from google.genai import types

with open('path/to/small-sample.mp3', 'rb') as f:
    audio_bytes = f.read()

client = genai.Client()
response = client.models.generate_content(
  model='gemini-2.5-flash',
  contents=[
    'Describe this audio clip',
    types.Part.from_bytes(
      data=audio_bytes,
      mime_type='audio/mp3',
    )
  ]
)

print(response.text)
A few things to keep in mind about inline audio data:

The maximum request size is 20 MB, which includes text prompts, system instructions, and files provided inline. If your file's size will make the total request size exceed 20 MB, then use the Files API to upload an audio file for use in the request.
If you're using an audio sample multiple times, it's more efficient to upload an audio file.
Get a transcript
To get a transcript of audio data, just ask for it in the prompt:

Python
JavaScript
Go
from google import genai

client = genai.Client()
myfile = client.files.upload(file='path/to/sample.mp3')
prompt = 'Generate a transcript of the speech.'

response = client.models.generate_content(
  model='gemini-2.5-flash',
  contents=[prompt, myfile]
)

print(response.text)
Refer to timestamps
You can refer to specific sections of an audio file using timestamps of the form MM:SS. For example, the following prompt requests a transcript that

Starts at 2 minutes 30 seconds from the beginning of the file.
Ends at 3 minutes 29 seconds from the beginning of the file.

Python
JavaScript
Go
# Create a prompt containing timestamps.
prompt = "Provide a transcript of the speech from 02:30 to 03:29."
Count tokens
Call the countTokens method to get a count of the number of tokens in an audio file. For example:

Python
JavaScript
Go
from google import genai

client = genai.Client()
response = client.models.count_tokens(
  model='gemini-2.5-flash',
  contents=[myfile]
)

print(response)
Supported audio formats
Gemini supports the following audio format MIME types:

WAV - audio/wav
MP3 - audio/mp3
AIFF - audio/aiff
AAC - audio/aac
OGG Vorbis - audio/ogg
FLAC - audio/flac
Technical details about audio
Gemini represents each second of audio as 32 tokens; for example, one minute of audio is represented as 1,920 tokens.
Gemini can "understand" non-speech components, such as birdsong or sirens.
The maximum supported length of audio data in a single prompt is 9.5 hours. Gemini doesn't limit the number of audio files in a single prompt; however, the total combined length of all audio files in a single prompt can't exceed 9.5 hours.
Gemini downsamples audio files to a 16 Kbps data resolution.
If the audio source contains multiple channels, Gemini combines those channels into a single channel.
What's next
This guide shows how to generate text in response to audio data. To learn more, see the following resources:

File prompting strategies: The Gemini API supports prompting with text, image, audio, and video data, also known as multimodal prompting.
System instructions: System instructions let you steer the behavior of the model based on your specific needs and use cases.
Safety guidance: Sometimes generative AI models produce unexpected outputs, such as outputs that are inaccurate, biased, or offensive. Post-processing and human evaluation are essential to limit the risk of harm from such outputs.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-26 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackFunction calling with the Gemini API

Function calling lets you connect models to external tools and APIs. Instead of generating text responses, the model determines when to call specific functions and provides the necessary parameters to execute real-world actions. This allows the model to act as a bridge between natural language and real-world actions and data. Function calling has 3 primary use cases:

Augment Knowledge: Access information from external sources like databases, APIs, and knowledge bases.
Extend Capabilities: Use external tools to perform computations and extend the limitations of the model, such as using a calculator or creating charts.
Take Actions: Interact with external systems using APIs, such as scheduling appointments, creating invoices, sending emails, or controlling smart home devices.
Get Weather Schedule Meeting Create Chart

Python
JavaScript
REST

from google import genai
from google.genai import types

# Define the function declaration for the model
schedule_meeting_function = {
    "name": "schedule_meeting",
    "description": "Schedules a meeting with specified attendees at a given time and date.",
    "parameters": {
        "type": "object",
        "properties": {
            "attendees": {
                "type": "array",
                "items": {"type": "string"},
                "description": "List of people attending the meeting.",
            },
            "date": {
                "type": "string",
                "description": "Date of the meeting (e.g., '2024-07-29')",
            },
            "time": {
                "type": "string",
                "description": "Time of the meeting (e.g., '15:00')",
            },
            "topic": {
                "type": "string",
                "description": "The subject or topic of the meeting.",
            },
        },
        "required": ["attendees", "date", "time", "topic"],
    },
}

# Configure the client and tools
client = genai.Client()
tools = types.Tool(function_declarations=[schedule_meeting_function])
config = types.GenerateContentConfig(tools=[tools])

# Send request with function declarations
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Schedule a meeting with Bob and Alice for 03/14/2025 at 10:00 AM about the Q3 planning.",
    config=config,
)

# Check for a function call
if response.candidates[0].content.parts[0].function_call:
    function_call = response.candidates[0].content.parts[0].function_call
    print(f"Function to call: {function_call.name}")
    print(f"Arguments: {function_call.args}")
    #  In a real app, you would call your function here:
    #  result = schedule_meeting(**function_call.args)
else:
    print("No function call found in the response.")
    print(response.text)
How function calling works
function calling
overview

Function calling involves a structured interaction between your application, the model, and external functions. Here's a breakdown of the process:

Define Function Declaration: Define the function declaration in your application code. Function Declarations describe the function's name, parameters, and purpose to the model.
Call LLM with function declarations: Send user prompt along with the function declaration(s) to the model. It analyzes the request and determines if a function call would be helpful. If so, it responds with a structured JSON object.
Execute Function Code (Your Responsibility): The Model does not execute the function itself. It's your application's responsibility to process the response and check for Function Call, if
Yes: Extract the name and args of the function and execute the corresponding function in your application.
No: The model has provided a direct text response to the prompt (this flow is less emphasized in the example but is a possible outcome).
Create User friendly response: If a function was executed, capture the result and send it back to the model in a subsequent turn of the conversation. It will use the result to generate a final, user-friendly response that incorporates the information from the function call.
This process can be repeated over multiple turns, allowing for complex interactions and workflows. The model also supports calling multiple functions in a single turn (parallel function calling) and in sequence (compositional function calling).

Step 1: Define a function declaration
Define a function and its declaration within your application code that allows users to set light values and make an API request. This function could call external services or APIs.

Python
JavaScript
# Define a function that the model can call to control smart lights
set_light_values_declaration = {
    "name": "set_light_values",
    "description": "Sets the brightness and color temperature of a light.",
    "parameters": {
        "type": "object",
        "properties": {
            "brightness": {
                "type": "integer",
                "description": "Light level from 0 to 100. Zero is off and 100 is full brightness",
            },
            "color_temp": {
                "type": "string",
                "enum": ["daylight", "cool", "warm"],
                "description": "Color temperature of the light fixture, which can be `daylight`, `cool` or `warm`.",
            },
        },
        "required": ["brightness", "color_temp"],
    },
}

# This is the actual function that would be called based on the model's suggestion
def set_light_values(brightness: int, color_temp: str) -> dict[str, int | str]:
    """Set the brightness and color temperature of a room light. (mock API).

    Args:
        brightness: Light level from 0 to 100. Zero is off and 100 is full brightness
        color_temp: Color temperature of the light fixture, which can be `daylight`, `cool` or `warm`.

    Returns:
        A dictionary containing the set brightness and color temperature.
    """
    return {"brightness": brightness, "colorTemperature": color_temp}
Step 2: Call the model with function declarations
Once you have defined your function declarations, you can prompt the model to use them. It analyzes the prompt and function declarations and decides whether to respond directly or to call a function. If a function is called, the response object will contain a function call suggestion.

Python
JavaScript
from google.genai import types

# Configure the client and tools
client = genai.Client()
tools = types.Tool(function_declarations=[set_light_values_declaration])
config = types.GenerateContentConfig(tools=[tools])

# Define user prompt
contents = [
    types.Content(
        role="user", parts=[types.Part(text="Turn the lights down to a romantic level")]
    )
]

# Send request with function declarations
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=contents
    config=config,
)

print(response.candidates[0].content.parts[0].function_call)
The model then returns a functionCall object in an OpenAPI compatible schema specifying how to call one or more of the declared functions in order to respond to the user's question.

Python
JavaScript
id=None args={'color_temp': 'warm', 'brightness': 25} name='set_light_values'
Step 3: Execute set_light_values function code
Extract the function call details from the model's response, parse the arguments , and execute the set_light_values function.

Python
JavaScript
# Extract tool call details, it may not be in the first part.
tool_call = response.candidates[0].content.parts[0].function_call

if tool_call.name == "set_light_values":
    result = set_light_values(**tool_call.args)
    print(f"Function execution result: {result}")
Step 4: Create user friendly response with function result and call the model again
Finally, send the result of the function execution back to the model so it can incorporate this information into its final response to the user.

Python
JavaScript
from google import genai
from google.genai import types

# Create a function response part
function_response_part = types.Part.from_function_response(
    name=tool_call.name,
    response={"result": result},
)

# Append function call and result of the function execution to contents
contents.append(response.candidates[0].content) # Append the content from the model's response.
contents.append(types.Content(role="user", parts=[function_response_part])) # Append the function response

client = genai.Client()
final_response = client.models.generate_content(
    model="gemini-2.5-flash",
    config=config,
    contents=contents,
)

print(final_response.text)
This completes the function calling flow. The model successfully used the set_light_values function to perform the request action of the user.

Function declarations
When you implement function calling in a prompt, you create a tools object, which contains one or more function declarations. You define functions using JSON, specifically with a select subset of the OpenAPI schema format. A single function declaration can include the following parameters:

name (string): A unique name for the function (get_weather_forecast, send_email). Use descriptive names without spaces or special characters (use underscores or camelCase).
description (string): A clear and detailed explanation of the function's purpose and capabilities. This is crucial for the model to understand when to use the function. Be specific and provide examples if helpful ("Finds theaters based on location and optionally movie title which is currently playing in theaters.").
parameters (object): Defines the input parameters the function expects.
type (string): Specifies the overall data type, such as object.
properties (object): Lists individual parameters, each with:
type (string): The data type of the parameter, such as string, integer, boolean, array.
description (string): A description of the parameter's purpose and format. Provide examples and constraints ("The city and state, e.g., 'San Francisco, CA' or a zip code e.g., '95616'.").
enum (array, optional): If the parameter values are from a fixed set, use "enum" to list the allowed values instead of just describing them in the description. This improves accuracy ("enum": ["daylight", "cool", "warm"]).
required (array): An array of strings listing the parameter names that are mandatory for the function to operate.
You can also construct FunctionDeclarations from Python functions directly using types.FunctionDeclaration.from_callable(client=client, callable=your_function).

Function calling with thinking
Enabling "thinking" can improve function call performance by allowing the model to reason through a request before suggesting function calls. The Gemini API is stateless, the model's reasoning context will be lost between turns in a multi-turn conversation. To preserve this context, you can use thought signatures. A thought signature is an encrypted representation of the model's internal thought process that you pass back to the model on subsequent turns.

The standard pattern for multi-turn tool use is to append the model's complete previous response to the conversation history. The content object includes the thought_signatures automatically. If you follow this pattern No code changes are required.

Manually managing thought signatures
If you modify the conversation history manually—instead of sending the complete previous response and want to benefit from thinking you must correctly handle the thought_signature included in the model's turn.

Follow these rules to ensure the model's context is preserved:

Always send the thought_signature back to the model inside its original Part.
Don't merge a Part containing a signature with one that does not. This breaks the positional context of the thought.
Don't combine two Parts that both contain signatures, as the signature strings cannot be merged.
Inspecting Thought Signatures
While not necessary for implementation, you can inspect the response to see the thought_signature for debugging or educational purposes.

Python
JavaScript
import base64
# After receiving a response from a model with thinking enabled
# response = client.models.generate_content(...)

# The signature is attached to the response part containing the function call
part = response.candidates[0].content.parts[0]
if part.thought_signature:
  print(base64.b64encode(part.thought_signature).decode("utf-8"))
Learn more about limitations and usage of thought signatures, and about thinking models in general, on the Thinking page.

Parallel function calling
In addition to single turn function calling, you can also call multiple functions at once. Parallel function calling lets you execute multiple functions at once and is used when the functions are not dependent on each other. This is useful in scenarios like gathering data from multiple independent sources, such as retrieving customer details from different databases or checking inventory levels across various warehouses or performing multiple actions such as converting your apartment into a disco.

Python
JavaScript
power_disco_ball = {
    "name": "power_disco_ball",
    "description": "Powers the spinning disco ball.",
    "parameters": {
        "type": "object",
        "properties": {
            "power": {
                "type": "boolean",
                "description": "Whether to turn the disco ball on or off.",
            }
        },
        "required": ["power"],
    },
}

start_music = {
    "name": "start_music",
    "description": "Play some music matching the specified parameters.",
    "parameters": {
        "type": "object",
        "properties": {
            "energetic": {
                "type": "boolean",
                "description": "Whether the music is energetic or not.",
            },
            "loud": {
                "type": "boolean",
                "description": "Whether the music is loud or not.",
            },
        },
        "required": ["energetic", "loud"],
    },
}

dim_lights = {
    "name": "dim_lights",
    "description": "Dim the lights.",
    "parameters": {
        "type": "object",
        "properties": {
            "brightness": {
                "type": "number",
                "description": "The brightness of the lights, 0.0 is off, 1.0 is full.",
            }
        },
        "required": ["brightness"],
    },
}
Configure the function calling mode to allow using all of the specified tools. To learn more, you can read about configuring function calling.

Python
JavaScript
from google import genai
from google.genai import types

# Configure the client and tools
client = genai.Client()
house_tools = [
    types.Tool(function_declarations=[power_disco_ball, start_music, dim_lights])
]
config = types.GenerateContentConfig(
    tools=house_tools,
    automatic_function_calling=types.AutomaticFunctionCallingConfig(
        disable=True
    ),
    # Force the model to call 'any' function, instead of chatting.
    tool_config=types.ToolConfig(
        function_calling_config=types.FunctionCallingConfig(mode='ANY')
    ),
)

chat = client.chats.create(model="gemini-2.5-flash", config=config)
response = chat.send_message("Turn this place into a party!")

# Print out each of the function calls requested from this single call
print("Example 1: Forced function calling")
for fn in response.function_calls:
    args = ", ".join(f"{key}={val}" for key, val in fn.args.items())
    print(f"{fn.name}({args})")
Each of the printed results reflects a single function call that the model has requested. To send the results back, include the responses in the same order as they were requested.

The Python SDK supports automatic function calling, which automatically converts Python functions to declarations, handles the function call execution and response cycle for you. Following is an example for the disco use case.

Note: Automatic Function Calling is a Python SDK only feature at the moment.
Python
from google import genai
from google.genai import types

# Actual function implementations
def power_disco_ball_impl(power: bool) -> dict:
    """Powers the spinning disco ball.

    Args:
        power: Whether to turn the disco ball on or off.

    Returns:
        A status dictionary indicating the current state.
    """
    return {"status": f"Disco ball powered {'on' if power else 'off'}"}

def start_music_impl(energetic: bool, loud: bool) -> dict:
    """Play some music matching the specified parameters.

    Args:
        energetic: Whether the music is energetic or not.
        loud: Whether the music is loud or not.

    Returns:
        A dictionary containing the music settings.
    """
    music_type = "energetic" if energetic else "chill"
    volume = "loud" if loud else "quiet"
    return {"music_type": music_type, "volume": volume}

def dim_lights_impl(brightness: float) -> dict:
    """Dim the lights.

    Args:
        brightness: The brightness of the lights, 0.0 is off, 1.0 is full.

    Returns:
        A dictionary containing the new brightness setting.
    """
    return {"brightness": brightness}

# Configure the client
client = genai.Client()
config = types.GenerateContentConfig(
    tools=[power_disco_ball_impl, start_music_impl, dim_lights_impl]
)

# Make the request
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Do everything you need to this place into party!",
    config=config,
)

print("\nExample 2: Automatic function calling")
print(response.text)
# I've turned on the disco ball, started playing loud and energetic music, and dimmed the lights to 50% brightness. Let's get this party started!
Compositional function calling
Compositional or sequential function calling allows Gemini to chain multiple function calls together to fulfill a complex request. For example, to answer "Get the temperature in my current location", the Gemini API might first invoke a get_current_location() function followed by a get_weather() function that takes the location as a parameter.

The following example demonstrates how to implement compositional function calling using the Python SDK and automatic function calling.

Python
JavaScript
This example uses the automatic function calling feature of the google-genai Python SDK. The SDK automatically converts the Python functions to the required schema, executes the function calls when requested by the model, and sends the results back to the model to complete the task.

import os
from google import genai
from google.genai import types

# Example Functions
def get_weather_forecast(location: str) -> dict:
    """Gets the current weather temperature for a given location."""
    print(f"Tool Call: get_weather_forecast(location={location})")
    # TODO: Make API call
    print("Tool Response: {'temperature': 25, 'unit': 'celsius'}")
    return {"temperature": 25, "unit": "celsius"}  # Dummy response

def set_thermostat_temperature(temperature: int) -> dict:
    """Sets the thermostat to a desired temperature."""
    print(f"Tool Call: set_thermostat_temperature(temperature={temperature})")
    # TODO: Interact with a thermostat API
    print("Tool Response: {'status': 'success'}")
    return {"status": "success"}

# Configure the client and model
client = genai.Client()
config = types.GenerateContentConfig(
    tools=[get_weather_forecast, set_thermostat_temperature]
)

# Make the request
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="If it's warmer than 20°C in London, set the thermostat to 20°C, otherwise set it to 18°C.",
    config=config,
)

# Print the final, user-facing response
print(response.text)
Expected Output

When you run the code, you will see the SDK orchestrating the function calls. The model first calls get_weather_forecast, receives the temperature, and then calls set_thermostat_temperature with the correct value based on the logic in the prompt.

Tool Call: get_weather_forecast(location=London)
Tool Response: {'temperature': 25, 'unit': 'celsius'}
Tool Call: set_thermostat_temperature(temperature=20)
Tool Response: {'status': 'success'}
OK. I've set the thermostat to 20°C.
Compositional function calling is a native Live API feature. This means Live API can handle the function calling similar to the Python SDK.

Python
JavaScript
# Light control schemas
turn_on_the_lights_schema = {'name': 'turn_on_the_lights'}
turn_off_the_lights_schema = {'name': 'turn_off_the_lights'}

prompt = """
  Hey, can you write run some python code to turn on the lights, wait 10s and then turn off the lights?
  """

tools = [
    {'code_execution': {}},
    {'function_declarations': [turn_on_the_lights_schema, turn_off_the_lights_schema]}
]

await run(prompt, tools=tools, modality="AUDIO")
Function calling modes
The Gemini API lets you control how the model uses the provided tools (function declarations). Specifically, you can set the mode within the.function_calling_config.

AUTO (Default): The model decides whether to generate a natural language response or suggest a function call based on the prompt and context. This is the most flexible mode and recommended for most scenarios.
ANY: The model is constrained to always predict a function call and guarantees function schema adherence. If allowed_function_names is not specified, the model can choose from any of the provided function declarations. If allowed_function_names is provided as a list, the model can only choose from the functions in that list. Use this mode when you require a function call response to every prompt (if applicable).
NONE: The model is prohibited from making function calls. This is equivalent to sending a request without any function declarations. Use this to temporarily disable function calling without removing your tool definitions.

Python
JavaScript
from google.genai import types

# Configure function calling mode
tool_config = types.ToolConfig(
    function_calling_config=types.FunctionCallingConfig(
        mode="ANY", allowed_function_names=["get_current_temperature"]
    )
)

# Create the generation config
config = types.GenerateContentConfig(
    tools=[tools],  # not defined here.
    tool_config=tool_config,
)
Automatic function calling (Python only)
When using the Python SDK, you can provide Python functions directly as tools. The SDK converts these functions into declarations, manages the function call execution, and handles the response cycle for you. Define your function with type hints and a docstring. For optimal results, it is recommended to use Google-style docstrings. The SDK will then automatically:

Detect function call responses from the model.
Call the corresponding Python function in your code.
Send the function's response back to the model.
Return the model's final text response.
The SDK currently does not parse argument descriptions into the property description slots of the generated function declaration. Instead, it sends the entire docstring as the top-level function description.

Python
from google import genai
from google.genai import types

# Define the function with type hints and docstring
def get_current_temperature(location: str) -> dict:
    """Gets the current temperature for a given location.

    Args:
        location: The city and state, e.g. San Francisco, CA

    Returns:
        A dictionary containing the temperature and unit.
    """
    # ... (implementation) ...
    return {"temperature": 25, "unit": "Celsius"}

# Configure the client
client = genai.Client()
config = types.GenerateContentConfig(
    tools=[get_current_temperature]
)  # Pass the function itself

# Make the request
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="What's the temperature in Boston?",
    config=config,
)

print(response.text)  # The SDK handles the function call and returns the final text
You can disable automatic function calling with:

Python
config = types.GenerateContentConfig(
    tools=[get_current_temperature],
    automatic_function_calling=types.AutomaticFunctionCallingConfig(disable=True)
)
Automatic function schema declaration
The API is able to describe any of the following types. Pydantic types are allowed, as long as the fields defined on them are also composed of allowed types. Dict types (like dict[str: int]) are not well supported here, don't use them.

Python
AllowedType = (
  int | float | bool | str | list['AllowedType'] | pydantic.BaseModel)
To see what the inferred schema looks like, you can convert it using from_callable:

Python
from google import genai
from google.genai import types

def multiply(a: float, b: float):
    """Returns a * b."""
    return a * b

client = genai.Client()
fn_decl = types.FunctionDeclaration.from_callable(callable=multiply, client=client)

# to_json_dict() provides a clean JSON representation.
print(fn_decl.to_json_dict())
Multi-tool use: Combine native tools with function calling
You can enable multiple tools combining native tools with function calling at the same time. Here's an example that enables two tools, Grounding with Google Search and code execution, in a request using the Live API.

Note: Multi-tool use is a-Live API only feature at the moment. The run() function declaration, which handles the asynchronous websocket setup, is omitted for brevity.
Python
JavaScript
# Multiple tasks example - combining lights, code execution, and search
prompt = """
  Hey, I need you to do three things for me.

    1.  Turn on the lights.
    2.  Then compute the largest prime palindrome under 100000.
    3.  Then use Google Search to look up information about the largest earthquake in California the week of Dec 5 2024.

  Thanks!
  """

tools = [
    {'google_search': {}},
    {'code_execution': {}},
    {'function_declarations': [turn_on_the_lights_schema, turn_off_the_lights_schema]} # not defined here.
]

# Execute the prompt with specified tools in audio modality
await run(prompt, tools=tools, modality="AUDIO")
Python developers can try this out in the Live API Tool Use notebook.

Model context protocol (MCP)
Model Context Protocol (MCP) is an open standard for connecting AI applications with external tools and data. MCP provides a common protocol for models to access context, such as functions (tools), data sources (resources), or predefined prompts.

The Gemini SDKs have built-in support for the MCP, reducing boilerplate code and offering automatic tool calling for MCP tools. When the model generates an MCP tool call, the Python and JavaScript client SDK can automatically execute the MCP tool and send the response back to the model in a subsequent request, continuing this loop until no more tool calls are made by the model.

Here, you can find an example of how to use a local MCP server with Gemini and mcp SDK.

Python
JavaScript
Make sure the latest version of the mcp SDK is installed on your platform of choice.

pip install mcp
Note: Python supports automatic tool calling by passing in the ClientSession into the tools parameters. If you want to disable it, you can provide automatic_function_calling with disabled True.
import os
import asyncio
from datetime import datetime
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from google import genai

client = genai.Client()

# Create server parameters for stdio connection
server_params = StdioServerParameters(
    command="npx",  # Executable
    args=["-y", "@philschmid/weather-mcp"],  # MCP Server
    env=None,  # Optional environment variables
)

async def run():
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            # Prompt to get the weather for the current day in London.
            prompt = f"What is the weather in London in {datetime.now().strftime('%Y-%m-%d')}?"

            # Initialize the connection between client and server
            await session.initialize()

            # Send request to the model with MCP function declarations
            response = await client.aio.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
                config=genai.types.GenerateContentConfig(
                    temperature=0,
                    tools=[session],  # uses the session, will automatically call the tool
                    # Uncomment if you **don't** want the SDK to automatically call the tool
                    # automatic_function_calling=genai.types.AutomaticFunctionCallingConfig(
                    #     disable=True
                    # ),
                ),
            )
            print(response.text)

# Start the asyncio event loop and run the main function
asyncio.run(run())
Limitations with built-in MCP support
Built-in MCP support is a experimental feature in our SDKs and has the following limitations:

Only tools are supported, not resources nor prompts
It is available for the Python and JavaScript/TypeScript SDK.
Breaking changes might occur in future releases.
Manual integration of MCP servers is always an option if these limit what you're building.

Supported models
This section lists models and their function calling capabilities. Experimental models are not included. You can find a comprehensive capabilities overview on the model overview page.

Model	Function Calling	Parallel Function Calling	Compositional Function Calling
Gemini 2.5 Pro	✔️	✔️	✔️
Gemini 2.5 Flash	✔️	✔️	✔️
Gemini 2.5 Flash-Lite	✔️	✔️	✔️
Gemini 2.0 Flash	✔️	✔️	✔️
Gemini 2.0 Flash-Lite	X	X	X
Best practices
Function and Parameter Descriptions: Be extremely clear and specific in your descriptions. The model relies on these to choose the correct function and provide appropriate arguments.
Naming: Use descriptive function names (without spaces, periods, or dashes).
Strong Typing: Use specific types (integer, string, enum) for parameters to reduce errors. If a parameter has a limited set of valid values, use an enum.
Tool Selection: While the model can use an arbitrary number of tools, providing too many can increase the risk of selecting an incorrect or suboptimal tool. For best results, aim to provide only the relevant tools for the context or task, ideally keeping the active set to a maximum of 10-20. Consider dynamic tool selection based on conversation context if you have a large total number of tools.
Prompt Engineering:
Provide context: Tell the model its role (e.g., "You are a helpful weather assistant.").
Give instructions: Specify how and when to use functions (e.g., "Don't guess dates; always use a future date for forecasts.").
Encourage clarification: Instruct the model to ask clarifying questions if needed.
Temperature: Use a low temperature (e.g., 0) for more deterministic and reliable function calls.
Validation: If a function call has significant consequences (e.g., placing an order), validate the call with the user before executing it.
Error Handling: Implement robust error handling in your functions to gracefully handle unexpected inputs or API failures. Return informative error messages that the model can use to generate helpful responses to the user.
Security: Be mindful of security when calling external APIs. Use appropriate authentication and authorization mechanisms. Avoid exposing sensitive data in function calls.
Token Limits: Function descriptions and parameters count towards your input token limit. If you're hitting token limits, consider limiting the number of functions or the length of the descriptions, break down complex tasks into smaller, more focused function sets.
Notes and limitations
Only a subset of the OpenAPI schema is supported.
Supported parameter types in Python are limited.
Automatic function calling is a Python SDK feature only.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-26 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackGrounding with Google Search

Grounding with Google Search connects the Gemini model to real-time web content and works with all available languages. This allows Gemini to provide more accurate answers and cite verifiable sources beyond its knowledge cutoff.

Grounding helps you build applications that can:

Increase factual accuracy: Reduce model hallucinations by basing responses on real-world information.
Access real-time information: Answer questions about recent events and topics.
Provide citations: Build user trust by showing the sources for the model's claims.

Python
JavaScript
REST

from google import genai
from google.genai import types

client = genai.Client()

grounding_tool = types.Tool(
    google_search=types.GoogleSearch()
)

config = types.GenerateContentConfig(
    tools=[grounding_tool]
)

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Who won the euro 2024?",
    config=config,
)

print(response.text)
You can learn more by trying the Search tool notebook.

How grounding with Google Search works
When you enable the google_search tool, the model handles the entire workflow of searching, processing, and citing information automatically.

grounding-overview

User Prompt: Your application sends a user's prompt to the Gemini API with the google_search tool enabled.
Prompt Analysis: The model analyzes the prompt and determines if a Google Search can improve the answer.
Google Search: If needed, the model automatically generates one or multiple search queries and executes them.
Search Results Processing: The model processes the search results, synthesizes the information, and formulates a response.
Grounded Response: The API returns a final, user-friendly response that is grounded in the search results. This response includes the model's text answer and groundingMetadata with the search queries, web results, and citations.
Understanding the Grounding Response
When a response is successfully grounded, the response includes a groundingMetadata field. This structured data is essential for verifying claims and building a rich citation experience in your application.

{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Spain won Euro 2024, defeating England 2-1 in the final. This victory marks Spain's record fourth European Championship title."
          }
        ],
        "role": "model"
      },
      "groundingMetadata": {
        "webSearchQueries": [
          "UEFA Euro 2024 winner",
          "who won euro 2024"
        ],
        "searchEntryPoint": {
          "renderedContent": "<!-- HTML and CSS for the search widget -->"
        },
        "groundingChunks": [
          {"web": {"uri": "https://vertexaisearch.cloud.google.com.....", "title": "aljazeera.com"}},
          {"web": {"uri": "https://vertexaisearch.cloud.google.com.....", "title": "uefa.com"}}
        ],
        "groundingSupports": [
          {
            "segment": {"startIndex": 0, "endIndex": 85, "text": "Spain won Euro 2024, defeatin..."},
            "groundingChunkIndices": [0]
          },
          {
            "segment": {"startIndex": 86, "endIndex": 210, "text": "This victory marks Spain's..."},
            "groundingChunkIndices": [0, 1]
          }
        ]
      }
    }
  ]
}
The Gemini API returns the following information with the groundingMetadata:

webSearchQueries : Array of the search queries used. This is useful for debugging and understanding the model's reasoning process.
searchEntryPoint : Contains the HTML and CSS to render the required Search Suggestions. Full usage requirements are detailed in the Terms of Service.
groundingChunks : Array of objects containing the web sources (uri and title).
groundingSupports : Array of chunks to connect model response text to the sources in groundingChunks. Each chunk links a text segment (defined by startIndex and endIndex) to one or more groundingChunkIndices. This is the key to building inline citations.
Grounding with Google Search can also be used in combination with the URL context tool to ground responses in both public web data and the specific URLs you provide.

Attributing Sources with inline Citations
The API returns structured citation data, giving you complete control over how you display sources in your user interface. You can use the groundingSupports and groundingChunks fields to link the model's statements directly to their sources. Here is a common pattern for processing the metadata to create a response with inline, clickable citations.

Python
JavaScript
def add_citations(response):
    text = response.text
    supports = response.candidates[0].grounding_metadata.grounding_supports
    chunks = response.candidates[0].grounding_metadata.grounding_chunks

    # Sort supports by end_index in descending order to avoid shifting issues when inserting.
    sorted_supports = sorted(supports, key=lambda s: s.segment.end_index, reverse=True)

    for support in sorted_supports:
        end_index = support.segment.end_index
        if support.grounding_chunk_indices:
            # Create citation string like [1](link1)[2](link2)
            citation_links = []
            for i in support.grounding_chunk_indices:
                if i < len(chunks):
                    uri = chunks[i].web.uri
                    citation_links.append(f"[{i + 1}]({uri})")

            citation_string = ", ".join(citation_links)
            text = text[:end_index] + citation_string + text[end_index:]

    return text

# Assuming response with grounding metadata
text_with_citations = add_citations(response)
print(text_with_citations)
Spain won Euro 2024, defeating England 2-1 in the final.[1](https:/...), [2](https:/...), [4](https:/...), [5](https:/...) This victory marks Spain's record-breaking fourth European Championship title.[5]((https:/...), [2](https:/...), [3](https:/...), [4](https:/...)
Pricing
When you use Grounding with Google Search, your project is billed per API request that includes the google_search tool. If the model decides to execute multiple search queries to answer a single prompt (for example, searching for "UEFA Euro 2024 winner" and "Spain vs England Euro 2024 final score" within the same API call), this counts as a single billable use of the tool for that request.

For detailed pricing information, see the Gemini API pricing page.

Supported Models
Experimental and Preview models are not included. You can find their capabilities on the model overview page.

Model	Grounding with Google Search
Gemini 2.5 Pro	✔️
Gemini 2.5 Flash	✔️
Gemini 2.5 Flash-Lite	✔️
Gemini 2.0 Flash	✔️
Gemini 1.5 Pro	✔️
Gemini 1.5 Flash	✔️
Note: Older models use a google_search_retrieval tool. For all current models, use the google_search tool as shown in the examples.
Grounding with Gemini 1.5 Models (Legacy)
While the google_search tool is recommended for Gemini 2.0 and later, Gemini 1.5 support a legacy tool named google_search_retrieval. This tool provides a dynamic mode that allows the model to decide whether to perform a search based on its confidence that the prompt requires fresh information. If the model's confidence is above a dynamic_threshold you set (a value between 0.0 and 1.0), it will perform a search.

Python
JavaScript
REST
# Note: This is a legacy approach for Gemini 1.5 models.
# The 'google_search' tool is recommended for all new development.
import os
from google import genai
from google.genai import types

client = genai.Client()

retrieval_tool = types.Tool(
    google_search_retrieval=types.GoogleSearchRetrieval(
        dynamic_retrieval_config=types.DynamicRetrievalConfig(
            mode=types.DynamicRetrievalConfigMode.MODE_DYNAMIC,
            dynamic_threshold=0.7 # Only search if confidence > 70%
        )
    )
)

config = types.GenerateContentConfig(
    tools=[retrieval_tool]
)

response = client.models.generate_content(
    model='gemini-1.5-flash',
    contents="Who won the euro 2024?",
    config=config,
)
print(response.text)
if not response.candidates[0].grounding_metadata:
  print("\nModel answered from its own knowledge.")
What's next
Try the Grounding with Google Search in the Gemini API Cookbook.
Learn about other available tools, like Function Calling.
Learn how to augment prompts with specific URLs using the URL context tool.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-25 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackCode execution

The Gemini API provides a code execution tool that enables the model to generate and run Python code. The model can then learn iteratively from the code execution results until it arrives at a final output. You can use code execution to build applications that benefit from code-based reasoning. For example, you can use code execution to solve equations or process text. You can also use the libraries included in the code execution environment to perform more specialized tasks.

Gemini is only able to execute code in Python. You can still ask Gemini to generate code in another language, but the model can't use the code execution tool to run it.

Enable code execution
To enable code execution, configure the code execution tool on the model. This allows the model to generate and run code.

Python
JavaScript
Go
REST

from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="What is the sum of the first 50 prime numbers? "
    "Generate and run code for the calculation, and make sure you get all 50.",
    config=types.GenerateContentConfig(
        tools=[types.Tool(code_execution=types.ToolCodeExecution)]
    ),
)

for part in response.candidates[0].content.parts:
    if part.text is not None:
        print(part.text)
    if part.executable_code is not None:
        print(part.executable_code.code)
    if part.code_execution_result is not None:
        print(part.code_execution_result.output)
The output might look something like the following, which has been formatted for readability:

Okay, I need to calculate the sum of the first 50 prime numbers. Here's how I'll
approach this:

1.  **Generate Prime Numbers:** I'll use an iterative method to find prime
    numbers. I'll start with 2 and check if each subsequent number is divisible
    by any number between 2 and its square root. If not, it's a prime.
2.  **Store Primes:** I'll store the prime numbers in a list until I have 50 of
    them.
3.  **Calculate the Sum:**  Finally, I'll sum the prime numbers in the list.

Here's the Python code to do this:

def is_prime(n):
  """Efficiently checks if a number is prime."""
  if n <= 1:
    return False
  if n <= 3:
    return True
  if n % 2 == 0 or n % 3 == 0:
    return False
  i = 5
  while i * i <= n:
    if n % i == 0 or n % (i + 2) == 0:
      return False
    i += 6
  return True

primes = []
num = 2
while len(primes) < 50:
  if is_prime(num):
    primes.append(num)
  num += 1

sum_of_primes = sum(primes)
print(f'{primes=}')
print(f'{sum_of_primes=}')

primes=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229]
sum_of_primes=5117

The sum of the first 50 prime numbers is 5117.
This output combines several content parts that the model returns when using code execution:

text: Inline text generated by the model
executableCode: Code generated by the model that is meant to be executed
codeExecutionResult: Result of the executable code
The naming conventions for these parts vary by programming language.

Use code execution in chat
You can also use code execution as part of a chat.

Python
JavaScript
Go
REST
from google import genai
from google.genai import types

client = genai.Client()

chat = client.chats.create(
    model="gemini-2.5-flash",
    config=types.GenerateContentConfig(
        tools=[types.Tool(code_execution=types.ToolCodeExecution)]
    ),
)

response = chat.send_message("I have a math question for you.")
print(response.text)

response = chat.send_message(
    "What is the sum of the first 50 prime numbers? "
    "Generate and run code for the calculation, and make sure you get all 50."
)

for part in response.candidates[0].content.parts:
    if part.text is not None:
        print(part.text)
    if part.executable_code is not None:
        print(part.executable_code.code)
    if part.code_execution_result is not None:
        print(part.code_execution_result.output)
Input/output (I/O)
Starting with Gemini 2.0 Flash, code execution supports file input and graph output. Using these input and output capabilities, you can upload CSV and text files, ask questions about the files, and have Matplotlib graphs generated as part of the response. The output files are returned as inline images in the response.

I/O pricing
When using code execution I/O, you're charged for input tokens and output tokens:

Input tokens:

User prompt
Output tokens:

Code generated by the model
Code execution output in the code environment
Thinking tokens
Summary generated by the model
I/O details
When you're working with code execution I/O, be aware of the following technical details:

The maximum runtime of the code environment is 30 seconds.
If the code environment generates an error, the model may decide to regenerate the code output. This can happen up to 5 times.
The maximum file input size is limited by the model token window. In AI Studio, using Gemini Flash 2.0, the maximum input file size is 1 million tokens (roughly 2MB for text files of the supported input types). If you upload a file that's too large, AI Studio won't let you send it.
Code execution works best with text and CSV files.
The input file can be passed in part.inlineData or part.fileData (uploaded via the Files API), and the output file is always returned as part.inlineData.
Single turn	Bidirectional (Multimodal Live API)
Models supported	All Gemini 2.0 and 2.5 models	Only Flash experimental models
File input types supported	.png, .jpeg, .csv, .xml, .cpp, .java, .py, .js, .ts	.png, .jpeg, .csv, .xml, .cpp, .java, .py, .js, .ts
Plotting libraries supported	Matplotlib, seaborn	Matplotlib, seaborn
Multi-tool use	Yes (code execution + grounding only)	Yes
Billing
There's no additional charge for enabling code execution from the Gemini API. You'll be billed at the current rate of input and output tokens based on the Gemini model you're using.

Here are a few other things to know about billing for code execution:

You're only billed once for the input tokens you pass to the model, and you're billed for the final output tokens returned to you by the model.
Tokens representing generated code are counted as output tokens. Generated code can include text and multimodal output like images.
Code execution results are also counted as output tokens.
The billing model is shown in the following diagram:

code execution billing model

You're billed at the current rate of input and output tokens based on the Gemini model you're using.
If Gemini uses code execution when generating your response, the original prompt, the generated code, and the result of the executed code are labeled intermediate tokens and are billed as input tokens.
Gemini then generates a summary and returns the generated code, the result of the executed code, and the final summary. These are billed as output tokens.
The Gemini API includes an intermediate token count in the API response, so you know why you're getting additional input tokens beyond your initial prompt.
Limitations
The model can only generate and execute code. It can't return other artifacts like media files.
In some cases, enabling code execution can lead to regressions in other areas of model output (for example, writing a story).
There is some variation in the ability of the different models to use code execution successfully.
Supported libraries
The code execution environment includes the following libraries:

attrs
chess
contourpy
fpdf
geopandas
imageio
jinja2
joblib
jsonschema
jsonschema-specifications
lxml
matplotlib
mpmath
numpy
opencv-python
openpyxl
packaging
pandas
pillow
protobuf
pylatex
pyparsing
PyPDF2
python-dateutil
python-docx
python-pptx
reportlab
scikit-learn
scipy
seaborn
six
striprtf
sympy
tabulate
tensorflow
toolz
xlrd
You can't install your own libraries.

Note: Only matplotlib is supported for graph rendering using code execution.
What's next
Try the code execution Colab.
Learn about other Gemini API tools:
Function calling
Grounding with Google Search
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackURL context

The URL context tool lets you provide additional context to the models in the form of URLs. By including URLs in your request, the model will access the content from those pages (as long as it's not a URL type listed in the limitations section) to inform and enhance its response.

The URL context tool is useful for tasks like the following:

Extract Data: Pull specific info like prices, names, or key findings from multiple URLs.
Compare Documents: Analyze multiple reports, articles, or PDFs to identify differences and track trends.
Synthesize & Create Content: Combine information from several source URLs to generate accurate summaries, blog posts, or reports.
Analyze Code & Docs: Point to a GitHub repository or technical documentation to explain code, generate setup instructions, or answer questions.
The following example shows how to compare two recipes from different websites.

Python
Javascript
REST

from google import genai
from google.genai.types import Tool, GenerateContentConfig

client = genai.Client()
model_id = "gemini-2.5-flash"

tools = [
  {"url_context": {}},
]

url1 = "https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592"
url2 = "https://www.allrecipes.com/recipe/21151/simple-whole-roast-chicken/"

response = client.models.generate_content(
    model=model_id,
    contents=f"Compare the ingredients and cooking times from the recipes at {url1} and {url2}",
    config=GenerateContentConfig(
        tools=tools,
    )
)

for each in response.candidates[0].content.parts:
    print(each.text)

# For verification, you can inspect the metadata to see which URLs the model retrieved
print(response.candidates[0].url_context_metadata)
How it works
The URL Context tool uses a two-step retrieval process to balance speed, cost, and access to fresh data. When you provide a URL, the tool first attempts to fetch the content from an internal index cache. This acts as a highly optimized cache. If a URL is not available in the index (for example, if it's a very new page), the tool automatically falls back to do a live fetch. This directly accesses the URL to retrieve its content in real-time.

Combining with other tools
You can combine the URL context tool with other tools to create more powerful workflows.

Grounding with search
When both URL context and Grounding with Google Search are enabled, the model can use its search capabilities to find relevant information online and then use the URL context tool to get a more in-depth understanding of the pages it finds. This approach is powerful for prompts that require both broad searching and deep analysis of specific pages.

Python
Javascript
REST
from google import genai
from google.genai.types import Tool, GenerateContentConfig, GoogleSearch, UrlContext

client = genai.Client()
model_id = "gemini-2.5-flash"

tools = [
      {"url_context": {}},
      {"google_search": {}}
  ]

response = client.models.generate_content(
    model=model_id,
    contents="Give me three day events schedule based on YOUR_URL. Also let me know what needs to taken care of considering weather and commute.",
    config=GenerateContentConfig(
        tools=tools,
    )
)

for each in response.candidates[0].content.parts:
    print(each.text)
# get URLs retrieved for context
print(response.candidates[0].url_context_metadata)

Understanding the response
When the model uses the URL context tool, the response includes a url_context_metadata object. This object lists the URLs the model retrieved content from and the status of each retrieval attempt, which is useful for verification and debugging.

The following is an example of that part of the response (parts of the response have been omitted for brevity):

{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "... \n"
          }
        ],
        "role": "model"
      },
      ...
      "url_context_metadata": {
        "url_metadata": [
          {
            "retrieved_url": "https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592",
            "url_retrieval_status": "URL_RETRIEVAL_STATUS_SUCCESS"
          },
          {
            "retrieved_url": "https://www.allrecipes.com/recipe/21151/simple-whole-roast-chicken/",
            "url_retrieval_status": "URL_RETRIEVAL_STATUS_SUCCESS"
          }
        ]
      }
    }
}
For complete detail about this object , see the UrlContextMetadata API reference.

Safety checks
The system performs a content moderation check on the URL to confirm they meet safety standards. If the URL you provided fails this check, you will get an url_retrieval_status of URL_RETRIEVAL_STATUS_UNSAFE.

Token count
The content retrieved from the URLs you specify in your prompt is counted as part of the input tokens. You can see the token count for your prompt and tools usage in the usage_metadata object of the model output. The following is an example output:

'usage_metadata': {
  'candidates_token_count': 45,
  'prompt_token_count': 27,
  'prompt_tokens_details': [{'modality': <MediaModality.TEXT: 'TEXT'>,
    'token_count': 27}],
  'thoughts_token_count': 31,
  'tool_use_prompt_token_count': 10309,
  'tool_use_prompt_tokens_details': [{'modality': <MediaModality.TEXT: 'TEXT'>,
    'token_count': 10309}],
  'total_token_count': 10412
  }
Price per token depends on the model used, see the pricing page for details.

Supported models
gemini-2.5-pro
gemini-2.5-flash
gemini-2.5-flash-lite
gemini-live-2.5-flash-preview
gemini-2.0-flash-live-001
Best Practices
Provide specific URLs: For the best results, provide direct URLs to the content you want the model to analyze. The model will only retrieve content from the URLs you provide, not any content from nested links.
Check for accessibility: Verify that the URLs you provide don't lead to pages that require a login or are behind a paywall.
Use the complete URL: Provide the full URL, including the protocol (e.g., https://www.google.com instead of just google.com).
Limitations
Pricing: Content retrieved from URLs counts as input tokens. Rate limit and pricing is the based on the model used. See the rate limits and pricing pages for details.
Request limit: The tool can process up to 20 URLs per request.
URL content size: The maximum size for content retrieved from a single URL is 34MB.
Supported and unsupported content types
The tool can extract content from URLs with the following content types:

Text (text/html, application/json, text/plain, text/xml, text/css, text/javascript , text/csv, text/rtf)
Image (image/png, image/jpeg, image/bmp, image/webp)
PDF (application/pdf)
The following content types are not supported:

Paywalled content
YouTube videos (See video understanding to learn how to process YouTube URLs)
Google workspace files like Google docs or spreadsheets
Video and audio files
What's next
Explore the URL context cookbook for more examples.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackGet started with Live API

Note: Introducing a new version of the Gemini 2.5 Flash Live model, with improved function calling and conversational accuracy
The Live API enables low-latency, real-time voice and video interactions with Gemini. It processes continuous streams of audio, video, or text to deliver immediate, human-like spoken responses, creating a natural conversational experience for your users.

Live API Overview

Live API offers a comprehensive set of features such as Voice Activity Detection, tool use and function calling, session management (for managing long running conversations) and ephemeral tokens (for secure client-sided authentication).

This page gets you up and running with examples and basic code samples.

Try the Live API in Google AI Studiomic

Example applications
Check out the following example applications that illustrate how to use Live API for end-to-end use cases:

Live audio starter app on AI Studio, using JavaScript libraries to connect to Live API and stream bidirectional audio through your microphone and speakers.
Live API Python cookbook using Pyaudio that connects to Live API.
Partner integrations
If you prefer a simpler development process, you can use Daily, LiveKit or Voximplant. These are third-party partner platforms that have already integrated the Gemini Live API over the WebRTC protocol to streamline the development of real-time audio and video applications.

Before you begin building
There are two important decisions to make before you begin building with the Live API: choosing a model and choosing an implementation approach.

Choose an audio generation architecture
If you're building an audio-based use case, your choice of model determines the audio generation architecture used to create the audio response:

Native audio: This option provides the most natural and realistic-sounding speech and better multilingual performance. It also enables advanced features like affective (emotion-aware) dialogue, proactive audio (where the model can decide to ignore or respond to certain inputs), and "thinking". Native audio is supported by the following native audio models:
NEW: gemini-2.5-flash-native-audio-preview-09-2025
gemini-2.5-flash-preview-native-audio-dialog
gemini-2.5-flash-exp-native-audio-thinking-dialog
Half-cascade audio: This option uses a cascaded model architecture (native audio input and text-to-speech output). It offers better performance and reliability in production environments, especially with tool use. Half-cascaded audio is supported by the following models:
gemini-live-2.5-flash-preview
gemini-2.0-flash-live-001
Choose an implementation approach
When integrating with Live API, you'll need to choose one of the following implementation approaches:

Server-to-server: Your backend connects to the Live API using WebSockets. Typically, your client sends stream data (audio, video, text) to your server, which then forwards it to the Live API.
Client-to-server: Your frontend code connects directly to the Live API using WebSockets to stream data, bypassing your backend.
Note: Client-to-server generally offers better performance for streaming audio and video, since it bypasses the need to send the stream to your backend first. It's also easier to set up since you don't need to implement a proxy that sends data from your client to your server and then your server to the API. However, for production environments, in order to mitigate security risks, we recommend using ephemeral tokens instead of standard API keys.
Get started
This example reads a WAV file, sends it in the correct format, and saves the received data as WAV file.

You can send audio by converting it to 16-bit PCM, 16kHz, mono format, and you can receive audio by setting AUDIO as response modality. The output uses a sample rate of 24kHz.

Python
JavaScript
# Test file: https://storage.googleapis.com/generativeai-downloads/data/16000.wav
# Install helpers for converting files: pip install librosa soundfile
import asyncio
import io
from pathlib import Path
import wave
from google import genai
from google.genai import types
import soundfile as sf
import librosa

client = genai.Client()

# New native audio model:
model = "gemini-2.5-flash-native-audio-preview-09-2025"

config = {
  "response_modalities": ["AUDIO"],
  "system_instruction": "You are a helpful assistant and answer in a friendly tone.",
}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:

        buffer = io.BytesIO()
        y, sr = librosa.load("sample.wav", sr=16000)
        sf.write(buffer, y, sr, format='RAW', subtype='PCM_16')
        buffer.seek(0)
        audio_bytes = buffer.read()

        # If already in correct format, you can use this:
        # audio_bytes = Path("sample.pcm").read_bytes()

        await session.send_realtime_input(
            audio=types.Blob(data=audio_bytes, mime_type="audio/pcm;rate=16000")
        )

        wf = wave.open("audio.wav", "wb")
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(24000)  # Output is 24kHz

        async for response in session.receive():
            if response.data is not None:
                wf.writeframes(response.data)

            # Un-comment this code to print audio data info
            # if response.server_content.model_turn is not None:
            #      print(response.server_content.model_turn.parts[0].inline_data.mime_type)

        wf.close()

if __name__ == "__main__":
    asyncio.run(main())
What's next
Read the full Live API Capabilities guide for key capabilities and configurations; including Voice Activity Detection and native audio features.
Read the Tool use guide to learn how to integrate Live API with tools and function calling.
Read the Session management guide for managing long running conversations.
Read the Ephemeral tokens guide for secure authentication in client-to-server applications.
For more information about the underlying WebSockets API, see the WebSockets API reference.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-26 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackLive API capabilities guide

Preview: The Live API is in preview.
This is a comprehensive guide that covers capabilities and configurations available with the Live API. See Get started with Live API page for a overview and sample code for common use cases.

Before you begin
Familiarize yourself with core concepts: If you haven't already done so, read the Get started with Live API page first. This will introduce you to the fundamental principles of the Live API, how it works, and the distinction between the different models and their corresponding audio generation methods (native audio or half-cascade).
Try the Live API in AI Studio: You may find it useful to try the Live API in Google AI Studio before you start building. To use the Live API in Google AI Studio, select Stream.
Establishing a connection
The following example shows how to create a connection with an API key:

Python
JavaScript
import asyncio
from google import genai

client = genai.Client()

model = "gemini-live-2.5-flash-preview"
config = {"response_modalities": ["TEXT"]}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        print("Session started")

if __name__ == "__main__":
    asyncio.run(main())
Note: You can only set one modality in the response_modalities field. This means that you can configure the model to respond with either text or audio, but not both in the same session.
Interaction modalities
The following sections provide examples and supporting context for the different input and output modalities available in Live API.

Sending and receiving text
Here's how you can send and receive text:

Python
JavaScript
import asyncio
from google import genai

client = genai.Client()
model = "gemini-live-2.5-flash-preview"

config = {"response_modalities": ["TEXT"]}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        message = "Hello, how are you?"
        await session.send_client_content(
            turns={"role": "user", "parts": [{"text": message}]}, turn_complete=True
        )

        async for response in session.receive():
            if response.text is not None:
                print(response.text, end="")

if __name__ == "__main__":
    asyncio.run(main())
Incremental content updates
Use incremental updates to send text input, establish session context, or restore session context. For short contexts you can send turn-by-turn interactions to represent the exact sequence of events:

Python
JavaScript
turns = [
    {"role": "user", "parts": [{"text": "What is the capital of France?"}]},
    {"role": "model", "parts": [{"text": "Paris"}]},
]

await session.send_client_content(turns=turns, turn_complete=False)

turns = [{"role": "user", "parts": [{"text": "What is the capital of Germany?"}]}]

await session.send_client_content(turns=turns, turn_complete=True)
For longer contexts it's recommended to provide a single message summary to free up the context window for subsequent interactions. See Session Resumption for another method for loading session context.

Sending and receiving audio
The most common audio example, audio-to-audio, is covered in the Getting started guide.

Here's an audio-to-text example that reads a WAV file, sends it in the correct format and receives text output:

Python
JavaScript
# Test file: https://storage.googleapis.com/generativeai-downloads/data/16000.wav
# Install helpers for converting files: pip install librosa soundfile
import asyncio
import io
from pathlib import Path
from google import genai
from google.genai import types
import soundfile as sf
import librosa

client = genai.Client()
model = "gemini-live-2.5-flash-preview"

config = {"response_modalities": ["TEXT"]}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:

        buffer = io.BytesIO()
        y, sr = librosa.load("sample.wav", sr=16000)
        sf.write(buffer, y, sr, format='RAW', subtype='PCM_16')
        buffer.seek(0)
        audio_bytes = buffer.read()

        # If already in correct format, you can use this:
        # audio_bytes = Path("sample.pcm").read_bytes()

        await session.send_realtime_input(
            audio=types.Blob(data=audio_bytes, mime_type="audio/pcm;rate=16000")
        )

        async for response in session.receive():
            if response.text is not None:
                print(response.text)

if __name__ == "__main__":
    asyncio.run(main())
And here is a text-to-audio example. You can receive audio by setting AUDIO as response modality. This example saves the received data as WAV file:

Python
JavaScript
import asyncio
import wave
from google import genai

client = genai.Client()
model = "gemini-live-2.5-flash-preview"

config = {"response_modalities": ["AUDIO"]}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        wf = wave.open("audio.wav", "wb")
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(24000)

        message = "Hello how are you?"
        await session.send_client_content(
            turns={"role": "user", "parts": [{"text": message}]}, turn_complete=True
        )

        async for response in session.receive():
            if response.data is not None:
                wf.writeframes(response.data)

            # Un-comment this code to print audio data info
            # if response.server_content.model_turn is not None:
            #      print(response.server_content.model_turn.parts[0].inline_data.mime_type)

        wf.close()

if __name__ == "__main__":
    asyncio.run(main())
Audio formats
Audio data in the Live API is always raw, little-endian, 16-bit PCM. Audio output always uses a sample rate of 24kHz. Input audio is natively 16kHz, but the Live API will resample if needed so any sample rate can be sent. To convey the sample rate of input audio, set the MIME type of each audio-containing Blob to a value like audio/pcm;rate=16000.

Audio transcriptions
You can enable transcription of the model's audio output by sending output_audio_transcription in the setup config. The transcription language is inferred from the model's response.

Python
JavaScript
import asyncio
from google import genai
from google.genai import types

client = genai.Client()
model = "gemini-live-2.5-flash-preview"

config = {"response_modalities": ["AUDIO"],
        "output_audio_transcription": {}
}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        message = "Hello? Gemini are you there?"

        await session.send_client_content(
            turns={"role": "user", "parts": [{"text": message}]}, turn_complete=True
        )

        async for response in session.receive():
            if response.server_content.model_turn:
                print("Model turn:", response.server_content.model_turn)
            if response.server_content.output_transcription:
                print("Transcript:", response.server_content.output_transcription.text)

if __name__ == "__main__":
    asyncio.run(main())
You can enable transcription of the audio input by sending input_audio_transcription in setup config.

Python
JavaScript
import asyncio
from pathlib import Path
from google import genai
from google.genai import types

client = genai.Client()
model = "gemini-live-2.5-flash-preview"

config = {
    "response_modalities": ["TEXT"],
    "input_audio_transcription": {},
}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        audio_data = Path("16000.pcm").read_bytes()

        await session.send_realtime_input(
            audio=types.Blob(data=audio_data, mime_type='audio/pcm;rate=16000')
        )

        async for msg in session.receive():
            if msg.server_content.input_transcription:
                print('Transcript:', msg.server_content.input_transcription.text)

if __name__ == "__main__":
    asyncio.run(main())
Stream audio and video
To see an example of how to use the Live API in a streaming audio and video format, run the "Live API - Get Started" file in the cookbooks repository:

View on Colab

Change voice and language
The Live API models each support a different set of voices. Half-cascade supports Puck, Charon, Kore, Fenrir, Aoede, Leda, Orus, and Zephyr. Native audio supports a much longer list (identical to the TTS model list). You can listen to all the voices in AI Studio.

To specify a voice, set the voice name within the speechConfig object as part of the session configuration:

Python
JavaScript
config = {
    "response_modalities": ["AUDIO"],
    "speech_config": {
        "voice_config": {"prebuilt_voice_config": {"voice_name": "Kore"}}
    },
}
Note: If you're using the generateContent API, the set of available voices is slightly different. See the audio generation guide for generateContent audio generation voices.
The Live API supports multiple languages.

To change the language, set the language code within the speechConfig object as part of the session configuration:

Python
JavaScript
config = {
    "response_modalities": ["AUDIO"],
    "speech_config": {
        "language_code": "de-DE"
    }
}
Note: Native audio output models automatically choose the appropriate language and don't support explicitly setting the language code.
Native audio capabilities
The following capabilities are only available with native audio. You can learn more about native audio in Choose a model and audio generation.

Note: Native audio models currently have limited tool use support. See Overview of supported tools for details.
How to use native audio output
To use native audio output, configure one of the native audio models and set response_modalities to AUDIO.

See Send and receive audio for a full example.

Python
JavaScript
model = "gemini-2.5-flash-native-audio-preview-09-2025"
config = types.LiveConnectConfig(response_modalities=["AUDIO"])

async with client.aio.live.connect(model=model, config=config) as session:
    # Send audio input and receive audio
Affective dialog
This feature lets Gemini adapt its response style to the input expression and tone.

To use affective dialog, set the api version to v1alpha and set enable_affective_dialog to truein the setup message:

Python
JavaScript
client = genai.Client(http_options={"api_version": "v1alpha"})

config = types.LiveConnectConfig(
    response_modalities=["AUDIO"],
    enable_affective_dialog=True
)
Note that affective dialog is currently only supported by the native audio output models.

Proactive audio
When this feature is enabled, Gemini can proactively decide not to respond if the content is not relevant.

To use it, set the api version to v1alpha and configure the proactivity field in the setup message and set proactive_audio to true:

Python
JavaScript
client = genai.Client(http_options={"api_version": "v1alpha"})

config = types.LiveConnectConfig(
    response_modalities=["AUDIO"],
    proactivity={'proactive_audio': True}
)
Note that proactive audio is currently only supported by the native audio output models.

Thinking
The latest native audio output model gemini-2.5-flash-native-audio-preview-09-2025 supports thinking capabilities, with dynamic thinking enabled by default.

The thinkingBudget parameter guides the model on the number of thinking tokens to use when generating a response. You can disable thinking by setting thinkingBudget to 0. For more info on the thinkingBudget configuration details of the model, see the thinking budgets documentation.

Python
JavaScript
model = "gemini-2.5-flash-native-audio-preview-09-2025"

config = types.LiveConnectConfig(
    response_modalities=["AUDIO"]
    thinking_config=types.ThinkingConfig(
        thinking_budget=1024,
    )
)

async with client.aio.live.connect(model=model, config=config) as session:
    # Send audio input and receive audio
Additionally, you can enable thought summaries by setting includeThoughts to true in your configuration. See thought summaries for more info:

Python
JavaScript
model = "gemini-2.5-flash-native-audio-preview-09-2025"

config = types.LiveConnectConfig(
    response_modalities=["AUDIO"]
    thinking_config=types.ThinkingConfig(
        thinking_budget=1024,
        include_thoughts=True
    )
)
Voice Activity Detection (VAD)
Voice Activity Detection (VAD) allows the model to recognize when a person is speaking. This is essential for creating natural conversations, as it allows a user to interrupt the model at any time.

When VAD detects an interruption, the ongoing generation is canceled and discarded. Only the information already sent to the client is retained in the session history. The server then sends a BidiGenerateContentServerContent message to report the interruption.

The Gemini server then discards any pending function calls and sends a BidiGenerateContentServerContent message with the IDs of the canceled calls.

Python
JavaScript
async for response in session.receive():
    if response.server_content.interrupted is True:
        # The generation was interrupted

        # If realtime playback is implemented in your application,
        # you should stop playing audio and clear queued playback here.
Automatic VAD
By default, the model automatically performs VAD on a continuous audio input stream. VAD can be configured with the realtimeInputConfig.automaticActivityDetection field of the setup configuration.

When the audio stream is paused for more than a second (for example, because the user switched off the microphone), an audioStreamEnd event should be sent to flush any cached audio. The client can resume sending audio data at any time.

Python
JavaScript
# example audio file to try:
# URL = "https://storage.googleapis.com/generativeai-downloads/data/hello_are_you_there.pcm"
# !wget -q $URL -O sample.pcm
import asyncio
from pathlib import Path
from google import genai
from google.genai import types

client = genai.Client()
model = "gemini-live-2.5-flash-preview"

config = {"response_modalities": ["TEXT"]}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        audio_bytes = Path("sample.pcm").read_bytes()

        await session.send_realtime_input(
            audio=types.Blob(data=audio_bytes, mime_type="audio/pcm;rate=16000")
        )

        # if stream gets paused, send:
        # await session.send_realtime_input(audio_stream_end=True)

        async for response in session.receive():
            if response.text is not None:
                print(response.text)

if __name__ == "__main__":
    asyncio.run(main())
With send_realtime_input, the API will respond to audio automatically based on VAD. While send_client_content adds messages to the model context in order, send_realtime_input is optimized for responsiveness at the expense of deterministic ordering.

Automatic VAD configuration
For more control over the VAD activity, you can configure the following parameters. See API reference for more info.

Python
JavaScript
from google.genai import types

config = {
    "response_modalities": ["TEXT"],
    "realtime_input_config": {
        "automatic_activity_detection": {
            "disabled": False, # default
            "start_of_speech_sensitivity": types.StartSensitivity.START_SENSITIVITY_LOW,
            "end_of_speech_sensitivity": types.EndSensitivity.END_SENSITIVITY_LOW,
            "prefix_padding_ms": 20,
            "silence_duration_ms": 100,
        }
    }
}
Disable automatic VAD
Alternatively, the automatic VAD can be disabled by setting realtimeInputConfig.automaticActivityDetection.disabled to true in the setup message. In this configuration the client is responsible for detecting user speech and sending activityStart and activityEnd messages at the appropriate times. An audioStreamEnd isn't sent in this configuration. Instead, any interruption of the stream is marked by an activityEnd message.

Python
JavaScript
config = {
    "response_modalities": ["TEXT"],
    "realtime_input_config": {"automatic_activity_detection": {"disabled": True}},
}

async with client.aio.live.connect(model=model, config=config) as session:
    # ...
    await session.send_realtime_input(activity_start=types.ActivityStart())
    await session.send_realtime_input(
        audio=types.Blob(data=audio_bytes, mime_type="audio/pcm;rate=16000")
    )
    await session.send_realtime_input(activity_end=types.ActivityEnd())
    # ...
Token count
You can find the total number of consumed tokens in the usageMetadata field of the returned server message.

Python
JavaScript
async for message in session.receive():
    # The server will periodically send messages that include UsageMetadata.
    if message.usage_metadata:
        usage = message.usage_metadata
        print(
            f"Used {usage.total_token_count} tokens in total. Response token breakdown:"
        )
        for detail in usage.response_tokens_details:
            match detail:
                case types.ModalityTokenCount(modality=modality, token_count=count):
                    print(f"{modality}: {count}")
Media resolution
You can specify the media resolution for the input media by setting the mediaResolution field as part of the session configuration:

Python
JavaScript
from google.genai import types

config = {
    "response_modalities": ["AUDIO"],
    "media_resolution": types.MediaResolution.MEDIA_RESOLUTION_LOW,
}
Limitations
Consider the following limitations of the Live API when you plan your project.

Response modalities
You can only set one response modality (TEXT or AUDIO) per session in the session configuration. Setting both results in a config error message. This means that you can configure the model to respond with either text or audio, but not both in the same session.

Client authentication
The Live API only provides server-to-server authentication by default. If you're implementing your Live API application using a client-to-server approach, you need to use ephemeral tokens to mitigate security risks.

Session duration
Audio-only sessions are limited to 15 minutes, and audio plus video sessions are limited to 2 minutes. However, you can configure different session management techniques for unlimited extensions on session duration.

Context window
A session has a context window limit of:

128k tokens for native audio output models
32k tokens for other Live API models
Supported languages
Live API supports the following languages.

Note: Native audio output models automatically choose the appropriate language and don't support explicitly setting the language code.
Language	BCP-47 Code	Language	BCP-47 Code
German (Germany)	de-DE	English (Australia)*	en-AU
English (UK)*	en-GB	English (India)	en-IN
English (US)	en-US	Spanish (US)	es-US
French (France)	fr-FR	Hindi (India)	hi-IN
Portuguese (Brazil)	pt-BR	Arabic (Generic)	ar-XA
Spanish (Spain)*	es-ES	French (Canada)*	fr-CA
Indonesian (Indonesia)	id-ID	Italian (Italy)	it-IT
Japanese (Japan)	ja-JP	Turkish (Turkey)	tr-TR
Vietnamese (Vietnam)	vi-VN	Bengali (India)	bn-IN
Gujarati (India)*	gu-IN	Kannada (India)*	kn-IN
Marathi (India)	mr-IN	Malayalam (India)*	ml-IN
Tamil (India)	ta-IN	Telugu (India)	te-IN
Dutch (Netherlands)	nl-NL	Korean (South Korea)	ko-KR
Mandarin Chinese (China)*	cmn-CN	Polish (Poland)	pl-PL
Russian (Russia)	ru-RU	Thai (Thailand)	th-TH
Languages marked with an asterisk (*) are not available for Native audio.

What's next
Read the Tool Use and Session Management guides for essential information on using the Live API effectively.
Try the Live API in Google AI Studio.
For more info about the Live API models, see Gemini 2.0 Flash Live and Gemini 2.5 Flash Native Audio on the Models page.
Try more examples in the Live API cookbook, the Live API Tools cookbook, and the Live API Get Started script.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-02 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackTool use with Live API

Tool use allows Live API to go beyond just conversation by enabling it to perform actions in the real-world and pull in external context while maintaining a real time connection. You can define tools such as Function calling, Code execution, and Google Search with the Live API.

Overview of supported tools
Here's a brief overview of the available tools for each model:

Tool	
gemini-live-2.5-flash-preview
gemini-2.0-flash-live-001
gemini-2.5-flash-native-audio-preview-09-2025
gemini-2.5-flash-preview-native-audio-dialog
gemini-2.5-flash-exp-native-audio-thinking-dialog
Search	Yes	Yes	Yes
Function calling	Yes	Yes	No
Code execution	Yes	No	No
URL context	Yes	No	No
Function calling
Live API supports function calling, just like regular content generation requests. Function calling lets the Live API interact with external data and programs, greatly increasing what your applications can accomplish.

You can define function declarations as part of the session configuration. After receiving tool calls, the client should respond with a list of FunctionResponse objects using the session.send_tool_response method.

See the Function calling tutorial to learn more.

Note: Unlike the generateContent API, the Live API doesn't support automatic tool response handling. You must handle tool responses manually in your client code.
Python
JavaScript
import asyncio
from google import genai
from google.genai import types

client = genai.Client()
model = "gemini-live-2.5-flash-preview"

# Simple function definitions
turn_on_the_lights = {"name": "turn_on_the_lights"}
turn_off_the_lights = {"name": "turn_off_the_lights"}

tools = [{"function_declarations": [turn_on_the_lights, turn_off_the_lights]}]
config = {"response_modalities": ["TEXT"], "tools": tools}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        prompt = "Turn on the lights please"
        await session.send_client_content(turns={"parts": [{"text": prompt}]})

        async for chunk in session.receive():
            if chunk.server_content:
                if chunk.text is not None:
                    print(chunk.text)
            elif chunk.tool_call:
                function_responses = []
                for fc in chunk.tool_call.function_calls:
                    function_response = types.FunctionResponse(
                        id=fc.id,
                        name=fc.name,
                        response={ "result": "ok" } # simple, hard-coded function response
                    )
                    function_responses.append(function_response)

                await session.send_tool_response(function_responses=function_responses)

if __name__ == "__main__":
    asyncio.run(main())
From a single prompt, the model can generate multiple function calls and the code necessary to chain their outputs. This code executes in a sandbox environment, generating subsequent BidiGenerateContentToolCall messages.

Asynchronous function calling
Note: Asynchronous function calling is only supported in half-cascade audio generation.
Function calling executes sequentially by default, meaning execution pauses until the results of each function call are available. This ensures sequential processing, which means you won't be able to continue interacting with the model while the functions are being run.

If you don't want to block the conversation, you can tell the model to run the functions asynchronously. To do so, you first need to add a behavior to the function definitions:

Python
JavaScript
  # Non-blocking function definitions
  turn_on_the_lights = {"name": "turn_on_the_lights", "behavior": "NON_BLOCKING"} # turn_on_the_lights will run asynchronously
  turn_off_the_lights = {"name": "turn_off_the_lights"} # turn_off_the_lights will still pause all interactions with the model
NON-BLOCKING ensures the function runs asynchronously while you can continue interacting with the model.

Then you need to tell the model how to behave when it receives the FunctionResponse using the scheduling parameter. It can either:

Interrupt what it's doing and tell you about the response it got right away (scheduling="INTERRUPT"),
Wait until it's finished with what it's currently doing (scheduling="WHEN_IDLE"),
Or do nothing and use that knowledge later on in the discussion (scheduling="SILENT")

Python
JavaScript
# for a non-blocking function definition, apply scheduling in the function response:
  function_response = types.FunctionResponse(
      id=fc.id,
      name=fc.name,
      response={
          "result": "ok",
          "scheduling": "INTERRUPT" # Can also be WHEN_IDLE or SILENT
      }
  )
Code execution
You can define code execution as part of the session configuration. This lets the Live API generate and execute Python code and dynamically perform computations to benefit your results. See the Code execution tutorial to learn more.

Python
JavaScript
import asyncio
from google import genai
from google.genai import types

client = genai.Client()
model = "gemini-live-2.5-flash-preview"

tools = [{'code_execution': {}}]
config = {"response_modalities": ["TEXT"], "tools": tools}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        prompt = "Compute the largest prime palindrome under 100000."
        await session.send_client_content(turns={"parts": [{"text": prompt}]})

        async for chunk in session.receive():
            if chunk.server_content:
                if chunk.text is not None:
                    print(chunk.text)

                model_turn = chunk.server_content.model_turn
                if model_turn:
                    for part in model_turn.parts:
                      if part.executable_code is not None:
                        print(part.executable_code.code)

                      if part.code_execution_result is not None:
                        print(part.code_execution_result.output)

if __name__ == "__main__":
    asyncio.run(main())
Grounding with Google Search
You can enable Grounding with Google Search as part of the session configuration. This increases the Live API's accuracy and prevents hallucinations. See the Grounding tutorial to learn more.

Python
JavaScript
import asyncio
from google import genai
from google.genai import types

client = genai.Client()
model = "gemini-live-2.5-flash-preview"

tools = [{'google_search': {}}]
config = {"response_modalities": ["TEXT"], "tools": tools}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        prompt = "When did the last Brazil vs. Argentina soccer match happen?"
        await session.send_client_content(turns={"parts": [{"text": prompt}]})

        async for chunk in session.receive():
            if chunk.server_content:
                if chunk.text is not None:
                    print(chunk.text)

                # The model might generate and execute Python code to use Search
                model_turn = chunk.server_content.model_turn
                if model_turn:
                    for part in model_turn.parts:
                      if part.executable_code is not None:
                        print(part.executable_code.code)

                      if part.code_execution_result is not None:
                        print(part.code_execution_result.output)

if __name__ == "__main__":
    asyncio.run(main())
Combining multiple tools
You can combine multiple tools within the Live API, increasing your application's capabilities even more:

Python
JavaScript
prompt = """
Hey, I need you to do three things for me.

1. Compute the largest prime palindrome under 100000.
2. Then use Google Search to look up information about the largest earthquake in California the week of Dec 5 2024?
3. Turn on the lights

Thanks!
"""

tools = [
    {"google_search": {}},
    {"code_execution": {}},
    {"function_declarations": [turn_on_the_lights, turn_off_the_lights]},
]

config = {"response_modalities": ["TEXT"], "tools": tools}

# ... remaining model call
What's next
Check out more examples of using tools with the Live API in the Tool use cookbook.
Get the full story on features and configurations from the Live API Capabilities guide.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-23 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackSession management with Live API

In the Live API, a session refers to a persistent connection where input and output are streamed continuously over the same connection (read more about how it works). This unique session design enables low latency and supports unique features, but can also introduce challenges, like session time limits, and early termination. This guide covers strategies for overcoming the session management challenges that can arise when using the Live API.

Session lifetime
Without compression, audio-only sessions are limited to 15 minutes, and audio-video sessions are limited to 2 minutes. Exceeding these limits will terminate the session (and therefore, the connection), but you can use context window compression to extend sessions to an unlimited amount of time.

The lifetime of a connection is limited as well, to around 10 minutes. When the connection terminates, the session terminates as well. In this case, you can configure a single session to stay active over multiple connections using session resumption. You'll also receive a GoAway message before the connection ends, allowing you to take further actions.

Context window compression
To enable longer sessions, and avoid abrupt connection termination, you can enable context window compression by setting the contextWindowCompression field as part of the session configuration.

In the ContextWindowCompressionConfig, you can configure a sliding-window mechanism and the number of tokens that triggers compression.

Python
JavaScript
from google.genai import types

config = types.LiveConnectConfig(
    response_modalities=["AUDIO"],
    context_window_compression=(
        # Configures compression with default parameters.
        types.ContextWindowCompressionConfig(
            sliding_window=types.SlidingWindow(),
        )
    ),
)
Session resumption
To prevent session termination when the server periodically resets the WebSocket connection, configure the sessionResumption field within the setup configuration.

Passing this configuration causes the server to send SessionResumptionUpdate messages, which can be used to resume the session by passing the last resumption token as the SessionResumptionConfig.handle of the subsequent connection.

Resumption tokens are valid for 2 hr after the last sessions termination.

Python
JavaScript
import asyncio
from google import genai
from google.genai import types

client = genai.Client()
model = "gemini-live-2.5-flash-preview"

async def main():
    print(f"Connecting to the service with handle {previous_session_handle}...")
    async with client.aio.live.connect(
        model=model,
        config=types.LiveConnectConfig(
            response_modalities=["AUDIO"],
            session_resumption=types.SessionResumptionConfig(
                # The handle of the session to resume is passed here,
                # or else None to start a new session.
                handle=previous_session_handle
            ),
        ),
    ) as session:
        while True:
            await session.send_client_content(
                turns=types.Content(
                    role="user", parts=[types.Part(text="Hello world!")]
                )
            )
            async for message in session.receive():
                # Periodically, the server will send update messages that may
                # contain a handle for the current state of the session.
                if message.session_resumption_update:
                    update = message.session_resumption_update
                    if update.resumable and update.new_handle:
                        # The handle should be retained and linked to the session.
                        return update.new_handle

                # For the purposes of this example, placeholder input is continually fed
                # to the model. In non-sample code, the model inputs would come from
                # the user.
                if message.server_content and message.server_content.turn_complete:
                    break

if __name__ == "__main__":
    asyncio.run(main())
Receiving a message before the session disconnects
The server sends a GoAway message that signals that the current connection will soon be terminated. This message includes the timeLeft, indicating the remaining time and lets you take further action before the connection will be terminated as ABORTED.

Python
JavaScript
async for response in session.receive():
    if response.go_away is not None:
        # The connection will soon be terminated
        print(response.go_away.time_left)
Receiving a message when the generation is complete
The server sends a generationComplete message that signals that the model finished generating the response.

Python
JavaScript
async for response in session.receive():
    if response.server_content.generation_complete is True:
        # The generation is complete
What's next
Explore more ways to work with the Live API in the full Capabilities guide, the Tool use page, or the Live API cookbook.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackEphemeral tokens

Ephemeral tokens are short-lived authentication tokens for accessing the Gemini API through WebSockets. They are designed to enhance security when you are connecting directly from a user's device to the API (a client-to-server implementation). Like standard API keys, ephemeral tokens can be extracted from client-side applications such as web browsers or mobile apps. But because ephemeral tokens expire quickly and can be restricted, they significantly reduce the security risks in a production environment.

Note: Ephemeral tokens are only compatible with Live API at this time. You should use them when accessing the Live API directly from client-side applications to enhance API key security.
How ephemeral tokens work
Here's how ephemeral tokens work at a high level:

Your client (e.g. web app) authenticates with your backend.
Your backend requests an ephemeral token from Gemini API's provisioning service.
Gemini API issues a short-lived token.
Your backend sends the token to the client for WebSocket connections to Live API. You can do this by swapping your API key with an ephemeral token.
The client then uses the token as if it were an API key.
Ephemeral tokens overview

This enhances security because even if extracted, the token is short-lived, unlike a long-lived API key deployed client-side. Since the client sends data directly to Gemini, this also improves latency and avoids your backends needing to proxy the real time data.

Create an ephemeral token
Here is a simplified example of how to get an ephemeral token from Gemini. By default, you'll have 1 minute to start new Live API sessions using the token from this request (newSessionExpireTime), and 30 minutes to send messages over that connection (expireTime).

Python
JavaScript
import datetime

now = datetime.datetime.now(tz=datetime.timezone.utc)

client = genai.Client(
    http_options={'api_version': 'v1alpha',}
)

token = client.auth_tokens.create(
    config = {
    'uses': 1, # The ephemeral token can only be used to start a single session
    'expire_time': now + datetime.timedelta(minutes=30), # Default is 30 minutes in the future
    # 'expire_time': '2025-05-17T00:00:00Z',   # Accepts isoformat.
    'new_session_expire_time': now + datetime.timedelta(minutes=1), # Default 1 minute in the future
    'http_options': {'api_version': 'v1alpha'},
  }
)

# You'll need to pass the value under token.name back to your client to use it
For expireTime value constraints, defaults, and other field specs, see the API reference. Within the expireTime timeframe, you'll need sessionResumption to reconnect the call every 10 minutes (this can be done with the same token even if uses: 1).

It's also possible to lock an ephemeral token to a set of configurations. This might be useful to further improve security of your application and keep your system instructions on the server side.

Python
JavaScript
client = genai.Client(
    http_options={'api_version': 'v1alpha',}
)

token = client.auth_tokens.create(
    config = {
    'uses': 1,
    'live_connect_constraints': {
        'model': 'gemini-2.0-flash-live-001',
        'config': {
            'session_resumption':{},
            'temperature':0.7,
            'response_modalities':['TEXT']
        }
    },
    'http_options': {'api_version': 'v1alpha'},
    }
)

# You'll need to pass the value under token.name back to your client to use it
You can also lock a subset of fields, see the SDK documentation for more info.

Connect to Live API with an ephemeral token
Once you have an ephemeral token, you use it as if it were an API key (but remember, it only works for the live API, and only with the v1alpha version of the API).

Note that use of ephemeral tokens only adds value when deploying applications that follow client-to-server implementation approach.

JavaScript
import { GoogleGenAI, Modality } from '@google/genai';

// Use the token generated in the "Create an ephemeral token" section here
const ai = new GoogleGenAI({
  apiKey: token.name
});
const model = 'gemini-2.0-flash-live-001';
const config = { responseModalities: [Modality.TEXT] };

async function main() {

  const session = await ai.live.connect({
    model: model,
    config: config,
    callbacks: { ... },
  });

  // Send content...

  session.close();
}

main();
Note: If not using the SDK, note that ephemeral tokens must either be passed in an access_token query parameter, or in an HTTP Authorization prefixed by the auth-scheme Token.
See Get started with Live API for more examples.

Best practices
Set a short expiration duration using the expire_time parameter.
Tokens expire, requiring re-initiation of the provisioning process.
Verify secure authentication for your own backend. Ephemeral tokens will only be as secure as your backend authentication method.
Generally, avoid using ephemeral tokens for backend-to-Gemini connections, as this path is typically considered secure.
Limitations
Ephemeral tokens are only compatible with Live API at this time.

What's next
Read the Live API reference on ephemeral tokens for more information.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackBatch API

The Gemini Batch API is designed to process large volumes of requests asynchronously at 50% of the standard cost. The target turnaround time is 24 hours, but in majority of cases, it is much quicker.

Use Batch API for large-scale, non-urgent tasks such as data pre-processing or running evaluations where an immediate response is not required.

Creating a batch job
You have two ways to submit your requests in Batch API:

Inline Requests: A list of GenerateContentRequest objects directly included in your batch creation request. This is suitable for smaller batches that keep the total request size under 20MB. The output returned from the model is a list of inlineResponse objects.
Input File: A JSON Lines (JSONL) file where each line contains a complete GenerateContentRequest object. This method is recommended for larger requests. The output returned from the model is a JSONL file where each line is either a GenerateContentResponse or a status object.
Inline requests
For a small number of requests, you can directly embed the GenerateContentRequest objects within your BatchGenerateContentRequest. The following example calls the BatchGenerateContent method with inline requests:

Python
JavaScript
REST

from google import genai
from google.genai import types

client = genai.Client()

# A list of dictionaries, where each is a GenerateContentRequest
inline_requests = [
    {
        'contents': [{
            'parts': [{'text': 'Tell me a one-sentence joke.'}],
            'role': 'user'
        }]
    },
    {
        'contents': [{
            'parts': [{'text': 'Why is the sky blue?'}],
            'role': 'user'
        }]
    }
]

inline_batch_job = client.batches.create(
    model="models/gemini-2.5-flash",
    src=inline_requests,
    config={
        'display_name': "inlined-requests-job-1",
    },
)

print(f"Created batch job: {inline_batch_job.name}")
Input file
For larger sets of requests, prepare a JSON Lines (JSONL) file. Each line in this file must be a JSON object containing a user-defined key and a request object, where the request is a valid GenerateContentRequest object. The user-defined key is used in the response to indicate which output is the result of which request. For example, the request with the key defined as request-1 will have its response annotated with the same key name.

This file is uploaded using the File API. The maximum allowed file size for an input file is 2GB.

The following is an example of a JSONL file. You can save it in a file named my-batch-requests.json:

{"key": "request-1", "request": {"contents": [{"parts": [{"text": "Describe the process of photosynthesis."}]}], "generation_config": {"temperature": 0.7}}}
{"key": "request-2", "request": {"contents": [{"parts": [{"text": "What are the main ingredients in a Margherita pizza?"}]}]}}
Similarly to inline requests, you can specify other parameters like system instructions, tools or other configurations in each request JSON.

You can upload this file using the File API as shown in the following example. If you are working with multimodal input, you can reference other uploaded files within your JSONL file.

Python
JavaScript
REST

import json
from google import genai
from google.genai import types

client = genai.Client()

# Create a sample JSONL file
with open("my-batch-requests.jsonl", "w") as f:
    requests = [
        {"key": "request-1", "request": {"contents": [{"parts": [{"text": "Describe the process of photosynthesis."}]}]}},
        {"key": "request-2", "request": {"contents": [{"parts": [{"text": "What are the main ingredients in a Margherita pizza?"}]}]}}
    ]
    for req in requests:
        f.write(json.dumps(req) + "\n")

# Upload the file to the File API
uploaded_file = client.files.upload(
    file='my-batch-requests.jsonl',
    config=types.UploadFileConfig(display_name='my-batch-requests', mime_type='jsonl')
)

print(f"Uploaded file: {uploaded_file.name}")
The following example calls the BatchGenerateContent method with the input file uploaded using File API:

Python
JavaScript
REST
from google import genai

# Assumes `uploaded_file` is the file object from the previous step
client = genai.Client()
file_batch_job = client.batches.create(
    model="gemini-2.5-flash",
    src=uploaded_file.name,
    config={
        'display_name': "file-upload-job-1",
    },
)

print(f"Created batch job: {file_batch_job.name}")
When you create a batch job, you will get a job name returned. Use this name for monitoring the job status as well as retrieving the results once the job completes.

The following is an example output that contains a job name:


Created batch job from file: batches/123456789

Batch embedding support
You can use the Batch API to interact with the Embeddings model for higher throughput. To create an embeddings batch job with either inline requests or input files, use the batches.create_embeddings API and specify the embeddings model.

Python
JavaScript
from google import genai

client = genai.Client()

# Creating an embeddings batch job with an input file request:
file_job = client.batches.create_embeddings(
    model="gemini-embedding-001",
    src={'file_name': uploaded_batch_requests.name},
    config={'display_name': "Input embeddings batch"},
)

# Creating an embeddings batch job with an inline request:
batch_job = client.batches.create_embeddings(
    model="gemini-embedding-001",
    # For a predefined list of requests `inlined_requests`
    src={'inlined_requests': inlined_requests},
    config={'display_name': "Inlined embeddings batch"},
)
Read the Embeddings section in the Batch API cookbook for more examples.

Request configuration
You can include any request configurations you would use in a standard non-batch request. For example, you could specify the temperature, system instructions or even pass in other modalities. The following example shows an example inline request that contains a system instruction for one of the requests:

Python
JavaScript
inline_requests_list = [
    {'contents': [{'parts': [{'text': 'Write a short poem about a cloud.'}]}]},
    {'contents': [{'parts': [{'text': 'Write a short poem about a cat.'}]}], 'system_instructions': {'parts': [{'text': 'You are a cat. Your name is Neko.'}]}}
]
Similarly can specify tools to use for a request. The following example shows a request that enables the Google Search tool:

Python
JavaScript
inline_requests_list = [
    {'contents': [{'parts': [{'text': 'Who won the euro 1998?'}]}]},
    {'contents': [{'parts': [{'text': 'Who won the euro 2025?'}]}], 'tools': [{'google_search ': {}}]}
]
You can specify structured output as well. The following example shows how to specify for your batch requests.

Python
JavaScript
import time
from google import genai
from pydantic import BaseModel, TypeAdapter

class Recipe(BaseModel):
    recipe_name: str
    ingredients: list[str]

client = genai.Client()

# A list of dictionaries, where each is a GenerateContentRequest
inline_requests = [
    {
        'contents': [{
            'parts': [{'text': 'List a few popular cookie recipes, and include the amounts of ingredients.'}],
            'role': 'user'
        }],
        'config': {
            'response_mime_type': 'application/json',
            'response_schema': list[Recipe]
        }
    },
    {
        'contents': [{
            'parts': [{'text': 'List a few popular gluten free cookie recipes, and include the amounts of ingredients.'}],
            'role': 'user'
        }],
        'config': {
            'response_mime_type': 'application/json',
            'response_schema': list[Recipe]
        }
    }
]

inline_batch_job = client.batches.create(
    model="models/gemini-2.5-flash",
    src=inline_requests,
    config={
        'display_name': "structured-output-job-1"
    },
)

# wait for the job to finish
job_name = inline_batch_job.name
print(f"Polling status for job: {job_name}")

while True:
    batch_job_inline = client.batches.get(name=job_name)
    if batch_job_inline.state.name in ('JOB_STATE_SUCCEEDED', 'JOB_STATE_FAILED', 'JOB_STATE_CANCELLED', 'JOB_STATE_EXPIRED'):
        break
    print(f"Job not finished. Current state: {batch_job_inline.state.name}. Waiting 30 seconds...")
    time.sleep(30)

print(f"Job finished with state: {batch_job_inline.state.name}")

# print the response
for i, inline_response in enumerate(batch_job_inline.dest.inlined_responses, start=1):
    print(f"\n--- Response {i} ---")

    # Check for a successful response
    if inline_response.response:
        # The .text property is a shortcut to the generated text.
        print(inline_response.response.text)

Monitoring job status
Use the operation name obtained when creating the batch job to poll its status. The state field of the batch job will indicate its current status. A batch job can be in one of the following states:

JOB_STATE_PENDING: The job has been created and is waiting to be processed by the service.
JOB_STATE_RUNNING: The job is in progress.
JOB_STATE_SUCCEEDED: The job completed successfully. You can now retrieve the results.
JOB_STATE_FAILED: The job failed. Check the error details for more information.
JOB_STATE_CANCELLED: The job was cancelled by the user.
JOB_STATE_EXPIRED: The job has expired because it was running or pending for more than 48 hours. The job will not have any results to retrieve. You can try submitting the job again or splitting up the requests into smaller batches.
You can poll the job status periodically to check for completion.

Python
JavaScript
import time
from google import genai

client = genai.Client()

# Use the name of the job you want to check
# e.g., inline_batch_job.name from the previous step
job_name = "YOUR_BATCH_JOB_NAME"  # (e.g. 'batches/your-batch-id')
batch_job = client.batches.get(name=job_name)

completed_states = set([
    'JOB_STATE_SUCCEEDED',
    'JOB_STATE_FAILED',
    'JOB_STATE_CANCELLED',
    'JOB_STATE_EXPIRED',
])

print(f"Polling status for job: {job_name}")
batch_job = client.batches.get(name=job_name) # Initial get
while batch_job.state.name not in completed_states:
  print(f"Current state: {batch_job.state.name}")
  time.sleep(30) # Wait for 30 seconds before polling again
  batch_job = client.batches.get(name=job_name)

print(f"Job finished with state: {batch_job.state.name}")
if batch_job.state.name == 'JOB_STATE_FAILED':
    print(f"Error: {batch_job.error}")
Retrieving results
Once the job status indicates your batch job has succeeded, the results are available in the response field.

Python
JavaScript
REST
import json
from google import genai

client = genai.Client()

# Use the name of the job you want to check
# e.g., inline_batch_job.name from the previous step
job_name = "YOUR_BATCH_JOB_NAME"
batch_job = client.batches.get(name=job_name)

if batch_job.state.name == 'JOB_STATE_SUCCEEDED':

    # If batch job was created with a file
    if batch_job.dest and batch_job.dest.file_name:
        # Results are in a file
        result_file_name = batch_job.dest.file_name
        print(f"Results are in file: {result_file_name}")

        print("Downloading result file content...")
        file_content = client.files.download(file=result_file_name)
        # Process file_content (bytes) as needed
        print(file_content.decode('utf-8'))

    # If batch job was created with inline request
    # (for embeddings, use batch_job.dest.inlined_embed_content_responses)
    elif batch_job.dest and batch_job.dest.inlined_responses:
        # Results are inline
        print("Results are inline:")
        for i, inline_response in enumerate(batch_job.dest.inlined_responses):
            print(f"Response {i+1}:")
            if inline_response.response:
                # Accessing response, structure may vary.
                try:
                    print(inline_response.response.text)
                except AttributeError:
                    print(inline_response.response) # Fallback
            elif inline_response.error:
                print(f"Error: {inline_response.error}")
    else:
        print("No results found (neither file nor inline).")
else:
    print(f"Job did not succeed. Final state: {batch_job.state.name}")
    if batch_job.error:
        print(f"Error: {batch_job.error}")
Cancelling a batch job
You can cancel an ongoing batch job using its name. When a job is canceled, it stops processing new requests.

Python
JavaScript
REST
from google import genai

client = genai.Client()

# Cancel a batch job
client.batches.cancel(name=batch_job_to_cancel.name)
Deleting a batch job
You can delete an existing batch job using its name. When a job is deleted, it stops processing new requests and is removed from the list of batch jobs.

Python
JavaScript
REST
from google import genai

client = genai.Client()

# Delete a batch job
client.batches.delete(name=batch_job_to_delete.name)
Technical details
Supported models: Batch API supports a range of Gemini models. Refer to the Models page for each model's support of Batch API. The supported modalities for Batch API are the same as what's supported on the interactive (or non-batch) API.
Pricing: Batch API usage is priced at 50% of the standard interactive API cost for the equivalent model. See the pricing page for details. Refer to the rate limits page for details on rate limits for this feature.
Service Level Objective (SLO): Batch jobs are designed to complete within a 24-hour turnaround time. Many jobs may complete much faster depending on their size and current system load.
Caching: Context caching is enabled for batch requests. If a request in your batch results in a cache hit, the cached tokens are priced the same as for non-batch API traffic.
Best practices
Use input files for large requests: For a large number of requests, always use the file input method for better manageability and to avoid hitting request size limits for the BatchGenerateContent call itself. Note that there's a the 2GB file size limit per input file.
Error handling: Check the batchStats for failedRequestCount after a job completes. If using file output, parse each line to check if it's a GenerateContentResponse or a status object indicating an error for that specific request. See the troubleshooting guide for a complete set of error codes.
Submit jobs once: The creation of a batch job is not idempotent. If you send the same creation request twice, two separate batch jobs will be created.
Break up very large batches: While the target turnaround time is 24 hours, actual processing time can vary based on system load and job size. For large jobs, consider breaking them into smaller batches if intermediate results are needed sooner.
What's next
Check out the Batch API notebook for more examples.
The OpenAI compatibility layer supports Batch API. Read the examples on the OpenAI Compatibility page.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-26 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackContext caching

Python JavaScript Go REST

In a typical AI workflow, you might pass the same input tokens over and over to a model. The Gemini API offers two different caching mechanisms:

Implicit caching (automatically enabled on Gemini 2.5 models, no cost saving guarantee)
Explicit caching (can be manually enabled on most models, cost saving guarantee)
Explicit caching is useful in cases where you want to guarantee cost savings, but with some added developer work.

Implicit caching
Implicit caching is enabled by default for all Gemini 2.5 models. We automatically pass on cost savings if your request hits caches. There is nothing you need to do in order to enable this. It is effective as of May 8th, 2025. The minimum input token count for context caching is 1,024 for 2.5 Flash and 4,096 for 2.5 Pro.

To increase the chance of an implicit cache hit:

Try putting large and common contents at the beginning of your prompt
Try to send requests with similar prefix in a short amount of time
You can see the number of tokens which were cache hits in the response object's usage_metadata field.

Explicit caching
Using the Gemini API explicit caching feature, you can pass some content to the model once, cache the input tokens, and then refer to the cached tokens for subsequent requests. At certain volumes, using cached tokens is lower cost than passing in the same corpus of tokens repeatedly.

When you cache a set of tokens, you can choose how long you want the cache to exist before the tokens are automatically deleted. This caching duration is called the time to live (TTL). If not set, the TTL defaults to 1 hour. The cost for caching depends on the input token size and how long you want the tokens to persist.

This section assumes that you've installed a Gemini SDK (or have curl installed) and that you've configured an API key, as shown in the quickstart.

Generate content using a cache
The following example shows how to generate content using a cached system instruction and video file.

Videos
PDFs
import os
import pathlib
import requests
import time

from google import genai
from google.genai import types

client = genai.Client()

# Download video file
url = 'https://storage.googleapis.com/generativeai-downloads/data/SherlockJr._10min.mp4'
path_to_video_file = pathlib.Path('SherlockJr._10min.mp4')
if not path_to_video_file.exists():
  with path_to_video_file.open('wb') as wf:
    response = requests.get(url, stream=True)
    for chunk in response.iter_content(chunk_size=32768):
      wf.write(chunk)

# Upload the video using the Files API
video_file = client.files.upload(file=path_to_video_file)

# Wait for the file to finish processing
while video_file.state.name == 'PROCESSING':
  print('Waiting for video to be processed.')
  time.sleep(2)
  video_file = client.files.get(name=video_file.name)

print(f'Video processing complete: {video_file.uri}')

# You must use an explicit version suffix: "-flash-001", not just "-flash".
model='models/gemini-2.0-flash-001'

# Create a cache with a 5 minute TTL
cache = client.caches.create(
    model=model,
    config=types.CreateCachedContentConfig(
      display_name='sherlock jr movie', # used to identify the cache
      system_instruction=(
          'You are an expert video analyzer, and your job is to answer '
          'the user\'s query based on the video file you have access to.'
      ),
      contents=[video_file],
      ttl="300s",
  )
)

# Construct a GenerativeModel which uses the created cache.
response = client.models.generate_content(
  model = model,
  contents= (
    'Introduce different characters in the movie by describing '
    'their personality, looks, and names. Also list the timestamps '
    'they were introduced for the first time.'),
  config=types.GenerateContentConfig(cached_content=cache.name)
)

print(response.usage_metadata)

# The output should look something like this:
#
# prompt_token_count: 696219
# cached_content_token_count: 696190
# candidates_token_count: 214
# total_token_count: 696433

print(response.text)
List caches
It's not possible to retrieve or view cached content, but you can retrieve cache metadata (name, model, display_name, usage_metadata, create_time, update_time, and expire_time).

To list metadata for all uploaded caches, use CachedContent.list():

for cache in client.caches.list():
  print(cache)
To fetch the metadata for one cache object, if you know its name, use get:

client.caches.get(name=name)
Update a cache
You can set a new ttl or expire_time for a cache. Changing anything else about the cache isn't supported.

The following example shows how to update the ttl of a cache using client.caches.update().

from google import genai
from google.genai import types

client.caches.update(
  name = cache.name,
  config  = types.UpdateCachedContentConfig(
      ttl='300s'
  )
)
To set the expiry time, it will accepts either a datetime object or an ISO-formatted datetime string (dt.isoformat(), like 2025-01-27T16:02:36.473528+00:00). Your time must include a time zone (datetime.utcnow() doesn't attach a time zone, datetime.now(datetime.timezone.utc) does attach a time zone).

from google import genai
from google.genai import types
import datetime

# You must use a time zone-aware time.
in10min = datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=10)

client.caches.update(
  name = cache.name,
  config  = types.UpdateCachedContentConfig(
      expire_time=in10min
  )
)
Delete a cache
The caching service provides a delete operation for manually removing content from the cache. The following example shows how to delete a cache:

client.caches.delete(cache.name)
Explicit caching using the OpenAI library
If you're using an OpenAI library, you can enable explicit caching using the cached_content property on extra_body.

When to use explicit caching
Context caching is particularly well suited to scenarios where a substantial initial context is referenced repeatedly by shorter requests. Consider using context caching for use cases such as:

Chatbots with extensive system instructions
Repetitive analysis of lengthy video files
Recurring queries against large document sets
Frequent code repository analysis or bug fixing
How explicit caching reduces costs
Context caching is a paid feature designed to reduce overall operational costs. Billing is based on the following factors:

Cache token count: The number of input tokens cached, billed at a reduced rate when included in subsequent prompts.
Storage duration: The amount of time cached tokens are stored (TTL), billed based on the TTL duration of cached token count. There are no minimum or maximum bounds on the TTL.
Other factors: Other charges apply, such as for non-cached input tokens and output tokens.
For up-to-date pricing details, refer to the Gemini API pricing page. To learn how to count tokens, see the Token guide.

Additional considerations
Keep the following considerations in mind when using context caching:

The minimum input token count for context caching is 1,024 for 2.5 Flash and 2,048 for 2.5 Pro. The maximum is the same as the maximum for the given model. (For more on counting tokens, see the Token guide).
The model doesn't make any distinction between cached tokens and regular input tokens. Cached content is a prefix to the prompt.
There are no special rate or usage limits on context caching; the standard rate limits for GenerateContent apply, and token limits include cached tokens.
The number of cached tokens is returned in the usage_metadata from the create, get, and list operations of the cache service, and also in GenerateContent when using the cache.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackFiles API

The Gemini family of artificial intelligence (AI) models is built to handle various types of input data, including text, images, and audio. Since these models can handle more than one type or mode of data, the Gemini models are called multimodal models or explained as having multimodal capabilities.

This guide shows you how to work with media files using the Files API. The basic operations are the same for audio files, images, videos, documents, and other supported file types.

For file prompting guidance, check out the File prompt guide section.

Upload a file
You can use the Files API to upload a media file. Always use the Files API when the total request size (including the files, text prompt, system instructions, etc.) is larger than 20 MB.

The following code uploads a file and then uses the file in a call to generateContent.

Python
JavaScript
Go
REST

from google import genai

client = genai.Client()

myfile = client.files.upload(file="path/to/sample.mp3")

response = client.models.generate_content(
    model="gemini-2.5-flash", contents=["Describe this audio clip", myfile]
)

print(response.text)
Get metadata for a file
You can verify that the API successfully stored the uploaded file and get its metadata by calling files.get.

Python
JavaScript
Go
REST
myfile = client.files.upload(file='path/to/sample.mp3')
file_name = myfile.name
myfile = client.files.get(name=file_name)
print(myfile)
List uploaded files
You can upload multiple files using the Files API. The following code gets a list of all the files uploaded:

Python
JavaScript
Go
REST
print('My files:')
for f in client.files.list():
    print(' ', f.name)
Delete uploaded files
Files are automatically deleted after 48 hours. You can also manually delete an uploaded file:

Python
JavaScript
Go
REST
myfile = client.files.upload(file='path/to/sample.mp3')
client.files.delete(name=myfile.name)
Usage info
You can use the Files API to upload and interact with media files. The Files API lets you store up to 20 GB of files per project, with a per-file maximum size of 2 GB. Files are stored for 48 hours. During that time, you can use the API to get metadata about the files, but you can't download the files. The Files API is available at no cost in all regions where the Gemini API is available.

File prompting strategies
This section provides guidance and best practices for using media files with prompts for the Gemini API.

Being able to use various types of data in your prompts gives you more flexibility in terms of what tasks you can tackle with the Gemini API. For example, you can send the model a photo of a delicious meal and ask it to write a short blog about the meal.

Prompt	Response
Write a short, engaging blog post based on this picture. It should include a description of the meal in the photo and talk about my journey meal prepping.


Cookies	
Meal prepping is a great way to save time and money, and it can also help you to eat healthier. This meal is a great example of a healthy and delicious meal that can be easily prepped ahead of time.

This meal features brown rice, roasted vegetables, and chicken teriyaki. The brown rice is a healthy and complex carbohydrate that will give you sustained energy. The roasted vegetables are a great way to get your daily dose of vitamins and minerals, and the chicken teriyaki is a delicious and protein-rich option.

This meal is also very easy to prepare. Simply cook the brown rice, roast the vegetables, and cook the chicken teriyaki. Once everything is cooked, divide it into meal prep containers and store them in the refrigerator. You can then grab a container and go on busy mornings!

If you're looking for a healthy and delicious meal that can be easily prepped ahead of time, this meal is a great option. It's packed with nutrients and flavor, and it's sure to keep you feeling full and satisfied.

Here's to healthy and delicious meal prepping!

If you are having trouble getting the output you want from prompts that use media files, there are some strategies that can help you get the results you want. The following sections provide design approaches and troubleshooting tips for improving prompts that use multimodal input.

You can improve your multimodal prompts by following these best practices:

Prompt design fundamentals
Be specific in your instructions: Craft clear and concise instructions that leave minimal room for misinterpretation.
Add a few examples to your prompt: Use realistic few-shot examples to illustrate what you want to achieve.
Break it down step-by-step: Divide complex tasks into manageable sub-goals, guiding the model through the process.
Specify the output format: In your prompt, ask for the output to be in the format you want, like markdown, JSON, HTML and more.
Put your image first for single-image prompts: While Gemini can handle image and text inputs in any order, for prompts containing a single image, it might perform better if that image (or video) is placed before the text prompt. However, for prompts that require images to be highly interleaved with texts to make sense, use whatever order is most natural.
Troubleshooting your multimodal prompt
If the model is not drawing information from the relevant part of the image: Drop hints with which aspects of the image you want the prompt to draw information from.
If the model output is too generic (not tailored enough to the image/video input): At the start of the prompt, try asking the model to describe the image(s) or video before providing the task instruction, or try asking the model to refer to what's in the image.
To troubleshoot which part failed: Ask the model to describe the image, or ask the model to explain its reasoning, to gauge the model's initial understanding.
If your prompt results in hallucinated content: Try dialing down the temperature setting or asking the model for shorter descriptions so that it's less likely to extrapolate additional details.
Tuning the sampling parameters: Experiment with different temperature settings and top-k selections to adjust the model's creativity.
Be specific in your instructions
Prompts have the most success when they are clear and detailed. If you have a specific output in mind, it's better to include that requirement in the prompt to ensure you get the output you want.

For this image of an airport board, asking the model to just "describe this image" could generate a general description. If you need the model to parse the time and city from the image, you can include that request directly in your prompt.

Prompt	Model response

Describe this image.

The image shows an airport arrivals and departures board.

Updated prompt	Improved response
Travel timetable
Parse the time and city from the airport board shown in this image into a list.

10:50 Moscow
11:05 Edinburgh
11:05 London
11:10 Bucharest
11:30 Kiev
11:35 Dublin
11:45 East Midlands
12:15 Sofia
12:30 London
12:30 Newcastle
12:40 St Petersburg
12:40 London
12:45 Manchester
Add a few examples
The Gemini model can accept multiple inputs which it can use as examples to understand the output you want. Adding these examples can help the model identify the patterns and apply the relationship between the given images and responses to the new example. This is also called "few-shot" learning.

In the example below, the initial output is written in sentence form, and also contains the country (Brazil). Suppose you want the output in a different format or style, and you want only the city, not the country. Adding few-shot examples to your prompt can steer the model to respond in the way you want.

Prompt	Model response
Travel timetable
Determine the city along with the landmark.

The landmark is the Christ the Redeemer statue in Rio de Janeiro, Brazil.

Updated prompt	Improved response
Determine the city along with the landmark.

colosseum	
city: Rome, landmark: the Colosseum.

Forbidden City	
city: Beijing, landmark: Forbidden City

forbidden-city	
city: Rio de Janeiro, landmark: Christ the Redeemer statue

Break it down step-by-step
For complex tasks like the ones that require both visual understanding and reasoning, it can be helpful to split the task into smaller, more straightforward steps. Alternatively, it could also be effective if you directly ask the model to “think step by step” in your prompt.

Prompt	Model response

When will I run out of toilet paper?

Soon, you only have 3 rolls left.

Updated prompt	Improved response


1. First, count how many toilet paper rolls are in this picture.
2. Then, determine how much toilet paper a typical person uses per day.
3. Calculate how long these rolls of toilet paper will last.

1. There are 3 rolls of toilet paper in this picture.
2. A typical person uses about 20 sheets of toilet paper per day.
3. If each roll contains 200 sheets, then each roll will last for about 10 days. Therefore, the 3 rolls will last for about a month.
Math problems or other types of word problems are great candidates for asking the model to think step-by-step.

Prompt	Response


What is the 4th term in the sequence?

-135

The response from the model is incorrect. Some ways to improve this is to ask the model to parse the problem before answering the prompt.

Prompt	Response


Parse the formula in the image first.

Then based on the formula, answer "what's the 4th term in the sequence?".

Click to expand the result
This model response is correct - now to make the response even more streamlined, you can ask the model to to think step-by-step.

Updated prompt	Improved response

What is the 4th term in the sequence? Think step by step.

The first term is 15.

The second term is b(1) * (-3) = 15 * (-3) = -45.

The third term is b(2) * (-3) = -45 * (-3) = 135.

The fourth term is b(3) * (-3) = 135 * (-3) = -405.

Specify the output format
A common problem is the need for model output to be in a certain format (e.g. markdown, JSON, HTML), especially if the model output needs to be ingested by a downstream task. You can try to produce output in that format by instructing the model to do so within the prompt. Below are two examples:

Prompt	Model response

Parse the table in this image into markdown format

| Subject | Status | Time | Start date | Due on |

| ------- | ------ | ---- | ---------- | ------ |

| Math | Done | 1.5 hrs | 11/29/2023 | 12/1/2023 |

| Geography | Done | 30 min | 12/2/2023 | 12/4/2023 |

| Physics | In progress | 2 hrs | 12/3/2023 | 12/5/2023 |

| Biology | Not started | 6 hrs | 11/2/2016 | 12/6/2023 |

Prompt	Model response

Provide a list of all the following attributes:

ingredients, type of cuisine, vegetarian or not, in JSON format


```json

{

"ingredients": [

"rice",

"shrimp",

"clams",

"mussels",

"peas",

"tomatoes",

"onions",

"garlic",

"olive oil",

"paprika",

"salt",

"pepper"

],

"type of cuisine": "Spanish",

"vegetarian": false

}

```

Put your image first for single-image prompts
While Gemini can interpret image and text in any order within a prompt, placing a single image before the text prompt might lead to better results. In the following samples, you'll notice the image comes first before the text in each prompt.

Troubleshooting your multimodal prompt
You might need to troubleshoot your prompt if you are not getting a helpful response. Here are a few strategies you could try.

If the model is not drawing information from the relevant part of the image
To get a more specific response, you can point out which aspects of the image you want the prompt to draw information from to inform its response.

Prompt	Model response

How many days will these diapers last a baby?

The diapers will last for 198 days before they run out.

Updated prompt	Improved response

How long will these diapers last before I run out?

Use the weight shown on the box to determine the child's age, and use the total number of diapers in the box.

Divide the total number by how many diapers the child goes through per day.

The box contains 198 diapers. The box states the diapers are for a child weighing 22-37 lbs.

The average child in this weight range is likely between 1 and 2 years old.

A 2-year-old typically goes through 6 diapers per day, therefore, the diapers will last around 33 days (198/6).

If the model output is too generic and not tailored enough to the image input
To help the model tailor its response to the image(s), try asking it to describe the images before performing its reasoning task.

Prompt	Model response
   
What is in common between these images?

All four images are examples of landscape photography.

Updated prompt	Improved response
   
First, describe what's in each image in detail. What's in common between these images?

The first image shows a person packing a suitcase. The second image shows an empty hallway in a shopping mall. The third image shows a roll of toilet paper. The fourth image shows a dark and stormy sea.

The commonality between these images is that they are all examples of liminal spaces. Liminal spaces are places or situations that are in between two other places or situations. They are often characterized by a sense of uncertainty or ambiguity.

The first image shows the person in between being at home and being on a trip. The second image shows the hallway in between two stores. The third image is of toilet paper, which can represent a bathroom. A bathroom is a transitional space between private and public realms. It's a place where we prepare ourselves to enter or leave the outside world.

The fourth image shows the sea in between being calm and being stormy.

Liminal spaces can be both exciting and unsettling. They can be a place of new beginning or a place of endings. They can be a place of reflection or a place of action.

You can also try explicitly asking the model to refer to what's in the image.

Updated prompt	Improved response
   
What is in common between these images? Refer to what's in the images in your response.

All of the images are related to travel. The first image shows a person packing a suitcase, the second image shows an empty hallway in a shopping mall, the third image shows a stack of toilet paper, and the fourth image shows a dark and stormy sea.

These images are all related to travel because they are all things that people need or use when they travel. The first image shows a person packing a suitcase, which is something that people do when they are going on a trip. The second image shows an empty hallway in a shopping mall, which is a place where people often go to buy things for their trips. The third image shows a stack of toilet paper, which is something that people often use when they are traveling. The fourth image shows a dark and stormy sea, which is something that people often encounter when they are traveling.

The same tips work for creative output from images. In the following example with the rabbit, explicitly asking the model to include aspects from the image can improve the output.

Prompt	Model response

Can you write me a poem about this image?

Little bunny, so soft and brown,
Hopping through the field, up and down.
Your ears so long, your tail so small,
You're the cutest creature of them all.

You nibble on the grass, so green and sweet,
And hop away when you see me.
But I'll always be your friend,
Little bunny, until the very end.

Updated prompt	Improved response

Can you write me a descriptive and dramatic poem about this image and include the location?

Little bunny on the green,
Ears so long, so keen.
What do you see out there,
In the distance, where you stare?

Is it the ocean blue,
Sparkling in the sun's hue?
Or the waves that crash and roar,
A rhythm that you adore?

Little bunny, tell me true,
What captures your attention so?
Is it the salty breeze,
Or the seagulls' cries that please?

Perhaps it's the vastness of it all,
A world so big and small.
A place where dreams can roam,
And adventures can be sown.

Little bunny, I wonder what you dream,
As you sit on the grass, so serene.
Do you yearn to explore the deep,
Or stay on land, where you can leap?

Whatever it may be, little bunny,
Keep that spark of wonder burning brightly.
For in your dreams and aspirations,
Lies a world waiting for your creation.

Troubleshooting which part of the prompt failed
It can be hard to know whether a prompt failed because the model didn't understand the image to begin with, or if it did understand the image but did not perform the correct reasoning steps afterward. To disambiguate between those reasons, ask the model to describe what's in the image.

In the following example, if the model responds with a snack that seems surprising when paired with tea (e.g. popcorn), you can first troubleshoot to determine whether the model correctly recognized that the image contains tea.

Prompt	Prompt for troubleshooting

What's a snack I can make in 1 minute that would go well with this?


Describe what's in this image.

Another strategy is to ask the model to explain its reasoning. That can help you narrow down which part of the reasoning broke down, if any.

Prompt	Prompt for troubleshooting

What's a snack I can make in 1 minute that would go well with this?


What's a snack I can make in 1 minute that would go well with this? Please explain why.

What's next
Try writing your own multimodal prompts using Google AI Studio.
For information on using the Gemini Files API for uploading media files and including them in your prompts, see the Vision, Audio, and Document processing guides.
For more guidance on prompt design, like tuning sampling parameters, see the Prompt strategies page.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackUnderstand and count tokens

Python JavaScript Go



Gemini and other generative AI models process input and output at a granularity called a token.

About tokens
Tokens can be single characters like z or whole words like cat. Long words are broken up into several tokens. The set of all tokens used by the model is called the vocabulary, and the process of splitting text into tokens is called tokenization.

For Gemini models, a token is equivalent to about 4 characters. 100 tokens is equal to about 60-80 English words.

When billing is enabled, the cost of a call to the Gemini API is determined in part by the number of input and output tokens, so knowing how to count tokens can be helpful.

Try out counting tokens in a Colab
You can try out counting tokens by using a Colab.

Try a Colab notebook
View notebook on GitHub
Context windows
The models available through the Gemini API have context windows that are measured in tokens. The context window defines how much input you can provide and how much output the model can generate. You can determine the size of the context window by calling the getModels endpoint or by looking in the models documentation.

In the following example, you can see that the gemini-1.5-flash model has an input limit of about 1,000,000 tokens and an output limit of about 8,000 tokens, which means a context window is 1,000,000 tokens.

from google import genai

client = genai.Client()
model_info = client.models.get(model="gemini-2.0-flash")
print(f"{model_info.input_token_limit=}")
print(f"{model_info.output_token_limit=}")
# ( e.g., input_token_limit=30720, output_token_limit=2048 )

Count tokens
All input to and output from the Gemini API is tokenized, including text, image files, and other non-text modalities.

You can count tokens in the following ways:

Count text tokens
from google import genai

client = genai.Client()
prompt = "The quick brown fox jumps over the lazy dog."

# Count tokens using the new client method.
total_tokens = client.models.count_tokens(
    model="gemini-2.0-flash", contents=prompt
)
print("total_tokens: ", total_tokens)
# ( e.g., total_tokens: 10 )

response = client.models.generate_content(
    model="gemini-2.0-flash", contents=prompt
)

# The usage_metadata provides detailed token counts.
print(response.usage_metadata)
# ( e.g., prompt_token_count: 11, candidates_token_count: 73, total_token_count: 84 )

Count multi-turn (chat) tokens
from google import genai
from google.genai import types

client = genai.Client()

chat = client.chats.create(
    model="gemini-2.0-flash",
    history=[
        types.Content(
            role="user", parts=[types.Part(text="Hi my name is Bob")]
        ),
        types.Content(role="model", parts=[types.Part(text="Hi Bob!")]),
    ],
)
# Count tokens for the chat history.
print(
    client.models.count_tokens(
        model="gemini-2.0-flash", contents=chat.get_history()
    )
)
# ( e.g., total_tokens: 10 )

response = chat.send_message(
    message="In one sentence, explain how a computer works to a young child."
)
print(response.usage_metadata)
# ( e.g., prompt_token_count: 25, candidates_token_count: 21, total_token_count: 46 )

# You can count tokens for the combined history and a new message.
extra = types.UserContent(
    parts=[
        types.Part(
            text="What is the meaning of life?",
        )
    ]
)
history = chat.get_history()
history.append(extra)
print(client.models.count_tokens(model="gemini-2.0-flash", contents=history))
# ( e.g., total_tokens: 56 )

Count multimodal tokens
All input to the Gemini API is tokenized, including text, image files, and other non-text modalities. Note the following high-level key points about tokenization of multimodal input during processing by the Gemini API:

With Gemini 2.0, image inputs with both dimensions <=384 pixels are counted as 258 tokens. Images larger in one or both dimensions are cropped and scaled as needed into tiles of 768x768 pixels, each counted as 258 tokens. Prior to Gemini 2.0, images used a fixed 258 tokens.

Video and audio files are converted to tokens at the following fixed rates: video at 263 tokens per second and audio at 32 tokens per second.

Image files
Note: You'll get the same token count if you use a file uploaded using the File API or you provide the file as inline data.
Example that uses an uploaded image from the File API:

from google import genai

client = genai.Client()
prompt = "Tell me about this image"
your_image_file = client.files.upload(file=media / "organ.jpg")

print(
    client.models.count_tokens(
        model="gemini-2.0-flash", contents=[prompt, your_image_file]
    )
)
# ( e.g., total_tokens: 263 )

response = client.models.generate_content(
    model="gemini-2.0-flash", contents=[prompt, your_image_file]
)
print(response.usage_metadata)
# ( e.g., prompt_token_count: 264, candidates_token_count: 80, total_token_count: 345 )

Example that provides the image as inline data:

from google import genai
import PIL.Image

client = genai.Client()
prompt = "Tell me about this image"
your_image_file = PIL.Image.open(media / "organ.jpg")

# Count tokens for combined text and inline image.
print(
    client.models.count_tokens(
        model="gemini-2.0-flash", contents=[prompt, your_image_file]
    )
)
# ( e.g., total_tokens: 263 )

response = client.models.generate_content(
    model="gemini-2.0-flash", contents=[prompt, your_image_file]
)
print(response.usage_metadata)
# ( e.g., prompt_token_count: 264, candidates_token_count: 80, total_token_count: 345 )

Video or audio files
Audio and video are each converted to tokens at the following fixed rates:

Video: 263 tokens per second
Audio: 32 tokens per second
Note: You'll get the same token count if you use a file uploaded using the File API or you provide the file as inline data.
from google import genai
import time

client = genai.Client()
prompt = "Tell me about this video"
your_file = client.files.upload(file=media / "Big_Buck_Bunny.mp4")

# Poll until the video file is completely processed (state becomes ACTIVE).
while not your_file.state or your_file.state.name != "ACTIVE":
    print("Processing video...")
    print("File state:", your_file.state)
    time.sleep(5)
    your_file = client.files.get(name=your_file.name)

print(
    client.models.count_tokens(
        model="gemini-2.0-flash", contents=[prompt, your_file]
    )
)
# ( e.g., total_tokens: 300 )

response = client.models.generate_content(
    model="gemini-2.0-flash", contents=[prompt, your_file]
)
print(response.usage_metadata)
# ( e.g., prompt_token_count: 301, candidates_token_count: 60, total_token_count: 361 )

System instructions and tools
System instructions and tools also count towards the total token count for the input.

If you use system instructions, the total_tokens count increases to reflect the addition of system_instruction.

If you use function calling, the total_tokens count increases to reflect the addition of tools.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackPrompt design strategies

Prompt design is the process of creating prompts, or natural language requests, that elicit accurate, high quality responses from a language model.

This page introduces basic concepts, strategies, and best practices to get you started designing prompts to get the most out of Gemini AI models.

Topic-specific prompt guides
Looking for more specific prompt strategies? Check out our other prompting guides on:

Prompting with media files
Prompting for image generation with Imagen and Gemini Native Image Generation
Prompting for video generation
You can find other sample prompts in the prompt gallery meant to interactively showcase many of the concepts shared in this guide.

Clear and specific instructions
An effective and efficient way to customize model behavior is to provide it with clear and specific instructions. Instructions can be in the form of a question, step-by-step tasks, or as complex as mapping out a user's experience and mindset.

Input
Input is the required text in the prompt that you want the model to provide a response to. Inputs can be a question that the model answers (question input), a task the model performs (task input), an entity the model operates on (entity input), or partial input that the model completes or continues (completion input).

Input type	Prompt	Generated output
Question	

What's a good name for a flower shop that specializes in selling bouquets of
dried flowers? Create a list of 5 options with just the names.

Here are 10 names for a flower shop specializing in dried flowers:

1. Everlasting Blooms
2. Dried & Delightful
3. The Petal Preserve
4. Whispers of Wildflowers
5. Forever Blooms
Task	
Give me a simple list of just the things that I must bring on a camping trip. The list should have 5 items.
1. **Tent:** Your shelter from the elements.
2. **Sleeping Bag:** Stay warm and comfortable.
3. **Sleeping Pad:** Insulation and cushioning for a good night's sleep.
4. **Headlamp or Flashlight:** Light for nighttime activities.
5. **First Aid Kit:** Be prepared for minor injuries.
Entity	

Classify the following items as [large, small]:
Elephant
Mouse
Snail

Here's the classification:

* **Elephant:** Large
* **Mouse:** Small
* **Snail:** Small
Partial input completion
Generative language models work like an advanced auto completion tool. When you provide partial content, the model can provide the rest of the content or what it thinks is a continuation of that content as a response. When doing so, if you include any examples or context, the model can take those examples or context into account.

The following example provides a prompt with an instruction and an entity input:

Prompt:
For the given order, return a JSON object that has the fields cheeseburger, hamburger, fries, or
drink, with the value being the quantity.

Order: A burger and a drink.
Response:
{
"cheeseburger": 0,
"hamburger": 1,
"fries": 0,
"drink": 1
}
(gemini-2.5-flash)
While the model did as prompted, writing out the instructions in natural language can sometimes be challenging and it leaves a lot to the model's interpretation. For example, a restaurants menu might contain many items. To reduce the size of the JSON response, you probably want to omit the items that weren't ordered. In this case, you can give an example and a response prefix and let the model complete it:

Prompt:
Valid fields are cheeseburger, hamburger, fries, and drink.
Order: Give me a cheeseburger and fries
Output:
```
{
"cheeseburger": 1,
"fries": 1
}
```
Order: I want two burgers, a drink, and fries.
Output:
Response:
```
{
"hamburger": 2,
"drink": 1,
"fries": 1
}
```
(gemini-2.5-flash)
Notice how "cheeseburger" was excluded from the output because it wasn't a part of the order.

Constraints
Specify any constraints on reading the prompt or generating a response. You can tell the model what to do and not to do. For example, you can specify a constraint in the prompt on how long you want a summary to be:

Prompt:

Summarize this text in one sentence:
Text: A quantum computer exploits quantum mechanical phenomena to perform calculations exponentially
faster than any modern traditional computer. At very tiny scales, physical matter acts as both
particles and as waves, and quantum computing uses specialized hardware to leverage this behavior.
The operating principles of quantum devices is beyond the scope of classical physics. When deployed
at scale, quantum computers could be used in a wide variety of applications such as: in
cybersecurity to break existing encryption methods while helping researchers create new ones, in
meteorology to develop better weather forecasting etc. However, the current state of the art quantum
computers are still largely experimental and impractical.
Response:

Exploiting quantum mechanical phenomena, quantum computers can perform calculations exponentially faster than traditional computers for potential applications like cybersecurity and meteorology, although they are currently largely experimental and impractical.
(gemini-2.5-flash)
Response format
You can give instructions that specify the format of the response. For example, you can ask for the response to be formatted as a table, bulleted list, elevator pitch, keywords, sentence, or paragraph. The following system instruction tells the model to be more conversational in its response:

System instruction
All questions should be answered comprehensively with details, unless the user requests a concise response specifically.
Prompt
What is a smart way to make a business that sells DVD's in 2025?
Response:
Starting a business selling DVDs in 2025 presents significant challenges due to the overwhelming dominance of digital streaming and on-demand services; a "smart" approach would therefore require a highly specialized niche, a strong value proposition beyond just the disc, and likely a focus on community or collector markets rather than mainstream consumption.

Here's a breakdown of what a smart DVD business in 2025 would likely entail:

1. Extreme Niche Specialization: You cannot compete with streaming libraries. Your business must focus on what digital doesn't offer easily or at all. This could include:

* Out-of-Print & Rare Titles: Sourcing films or TV shows that have never been released digitally or are currently unavailable on major streaming platforms.
....
(gemini-2.5-flash)
Format responses with the completion strategy
The completion strategy can also help format the response. The following example prompts the model to create an essay outline:

Prompt:
Create an outline for an essay about hummingbirds.
Response:
Here is a possible outline for an essay about hummingbirds:

I. Introduction
A. Hook: Start with a captivating fact or description about hummingbirds (e.g., their speed, iridescent colors, or tiny size).
B. Background: Briefly introduce hummingbirds – where they are found (Americas), their reputation as unique birds.
C. Thesis Statement: State the main point of the essay, which could be about the remarkable adaptations, behaviors, and ecological importance of hummingbirds.

II. Appearance and Identification
.....
(gemini-2.5-flash)
The prompt didn't specify the format for the outline and the model chose a format for you. To get the model to return an outline in a specific format, you can add text that represents the start of the outline and let the model complete it based on the pattern that you initiated.

Prompt:
Create an outline for an essay about hummingbirds.
I. Introduction
*
Response:
Okay, here is an outline for an essay about hummingbirds, starting from the introduction you provided:

I. Introduction
* Hook: Start with a captivating fact or description about hummingbirds (e.g., their speed, iridescent colors, or tiny size).
* Background: Briefly introduce hummingbirds – where they are found (Americas), their reputation as unique birds, and their general characteristics.
* Thesis Statement: State the main point of the essay, focusing on the remarkable adaptations, behaviors, and ecological significance that make hummingbirds extraordinary.
.....
(gemini-2.5-flash)
Zero-shot vs few-shot prompts
You can include examples in the prompt that show the model what getting it right looks like. The model attempts to identify patterns and relationships from the examples and applies them when generating a response. Prompts that contain a few examples are called few-shot prompts, while prompts that provide no examples are called zero-shot prompts. Few-shot prompts are often used to regulate the formatting, phrasing, scoping, or general patterning of model responses. Use specific and varied examples to help the model narrow its focus and generate more accurate results.

We recommend to always include few-shot examples in your prompts. Prompts without few-shot examples are likely to be less effective. In fact, you can remove instructions from your prompt if your examples are clear enough in showing the task at hand.

The following zero-shot prompt asks the model to choose the best explanation.

Prompt:
Please choose the best explanation to the question:

Question: How is snow formed?
Explanation1: Snow is formed when water vapor in the air freezes into ice
crystals in the atmosphere, which can combine and grow into snowflakes as they
fall through the atmosphere and accumulate on the ground.
Explanation2: Water vapor freezes into ice crystals forming snow.
Answer:
Response:
Explanation1 is the better explanation because it provides more detail on the
process, including how ice crystals combine and grow into snowflakes as they
fall through the atmosphere.
(gemini-2.5-flash)
If your use case requires the model to produce concise responses, you can include examples in the prompt that give preference to concise responses.

The following prompt provides two examples that show preference to the shorter explanations. In the response, you can see that the examples guided the model to choose the shorter explanation (Explanation2) as opposed to the longer explanation (Explanation1) like it did previously.

Prompt:
Below are some examples showing a question, explanation, and answer format:

Question: Why is the sky blue?
Explanation1: The sky appears blue because of Rayleigh scattering, which causes
shorter blue wavelengths of light to be scattered more easily than longer red
wavelengths, making the sky look blue.
Explanation2: Due to Rayleigh scattering effect.
Answer: Explanation2

Question: What is the cause of earthquakes?
Explanation1: Sudden release of energy in the Earth's crust.
Explanation2: Earthquakes happen when tectonic plates suddenly slip or break
apart, causing a release of energy that creates seismic waves that can shake the
ground and cause damage.
Answer: Explanation1

Now, Answer the following question given the example formats above:

Question: How is snow formed?
Explanation1: Snow is formed when water vapor in the air freezes into ice
crystals in the atmosphere, which can combine and grow into snowflakes as they
fall through the atmosphere and accumulate on the ground.
Explanation2: Water vapor freezes into ice crystals forming snow.
Answer:
Response:
Answer: Explanation2
(gemini-2.5-flash)
Optimal number of examples
Models like Gemini can often pick up on patterns using a few examples, though you may need to experiment with the number of examples to provide in the prompt for the best results. At the same time, if you include too many examples, the model may start to overfit the response to the examples.

Patterns vs anti patterns
Using examples to show the model a pattern to follow is more effective than using examples to show the model an anti pattern to avoid.

⛔ Negative pattern:

Example
Don't end haikus with a question:
Haiku are fun
A short and simple poem
Don't you enjoy them?

✅ Positive pattern:

Example
Always end haikus with an assertion:
Haiku are fun
A short and simple poem
A joy to write

Consistent formatting
Make sure that the structure and formatting of few-shot examples are the same to avoid responses with undesired formats. One of the primary objectives of adding few-shot examples in prompts is to show the model the response format. Therefore, it is essential to ensure a consistent format across all examples, especially paying attention to XML tags, white spaces, newlines, and example splitters.

Add context
You can include instructions and information in a prompt that the model needs to solve a problem, instead of assuming that the model has all of the required information. This contextual information helps the model understand the constraints and details of what you're asking for it to do.

The following example asks the model to give troubleshooting guidance for a router:

Prompt:
What should I do to fix my disconnected wifi? The light on my Google
Wifi router is yellow and blinking slowly.
Response:
A yellow blinking light on your Google Wifi router usually indicates a problem
with the internet connection. Here are some steps to troubleshoot and fix the
issue:
1. Restart your router and modem:
- Unplug your modem from the power outlet and wait for 30 seconds.
- Plug your modem back in and wait for it to fully boot up.
- Unplug your Google Wifi router and wait for 30 seconds.
- Plug your Google Wifi router back in and wait for it to fully boot up.
.....
(gemini-2.5-flash)
The response looks like generic troubleshooting information that's not specific to the router or the status of the LED indicator lights.

To customize the response for the specific router, you can add to the prompt the router's troubleshooting guide as context for it to refer to when providing a response.

Prompt:
Answer the question using the text below. Respond with only the text provided.
Question: What should I do to fix my disconnected wifi? The light on my Google Wifi router is yellow and blinking slowly.

Text:
Color: Slowly pulsing yellow
What it means: There is a network error.
What to do:
Check that the Ethernet cable is connected to both your router and your modem and both devices are turned on. You might need to unplug and plug in each device again.

Color: Fast blinking yellow
What it means: You are holding down the reset button and are factory resetting this device.
What to do:
If you keep holding down the reset button, after about 12 seconds, the light will turn solid yellow. Once it is solid yellow, let go of the factory reset button.

Color: Solid yellow
What it means: Router is factory resetting.
What to do:
This can take up to 10 minutes. When it's done, the device will reset itself and start pulsing white, letting you know it's ready for setup.

Color: Solid red
What it means: Something is wrong.
What to do:
Critical failure. Factory reset the router. If the light stays red, contact Wifi customer support.
Response:
Check that the Ethernet cable is connected to both your router and your modem and both devices are turned on. You might need to unplug and plug in each device again.
(gemini-2.5-flash)
Add prefixes
A prefix is a word or phrase that you add to the prompt content that can serve several purposes, depending on where you put the prefix:

Input prefix: Adding a prefix to the input signals semantically meaningful parts of the input to the model. For example, the prefixes "English:" and "French:" demarcate two different languages.
Output prefix: Even though the output is generated by the model, you can add a prefix for the output in the prompt. The output prefix gives the model information about what's expected as a response. For example, the output prefix "JSON:" signals to the model that the output should be in JSON format.
Example prefix: In few-shot prompts, adding prefixes to the examples provides labels that the model can use when generating the output, which makes it easier to parse output content.
In the following example, "Text:" is the input prefix and "The answer is:" is the output prefix.

Prompt:
Classify the text as one of the following categories.
- large
- small
Text: Rhino
The answer is: large
Text: Mouse
The answer is: small
Text: Snail
The answer is: small
Text: Elephant
The answer is:
Response:
The answer is: large
(gemini-2.5-flash)
Break down prompts into components
For use cases that require complex prompts, you can help the model manage this complexity by breaking things down into simpler components.

Break down instructions: Instead of having many instructions in one prompt, create one prompt per instruction. You can choose which prompt to process based on the user's input.

Chain prompts: For complex tasks that involve multiple sequential steps, make each step a prompt and chain the prompts together in a sequence. In this sequential chain of prompts, the output of one prompt in the sequence becomes the input of the next prompt. The output of the last prompt in the sequence is the final output.

Aggregate responses: Aggregation is when you want to perform different parallel tasks on different portions of the data and aggregate the results to produce the final output. For example, you can tell the model to perform one operation on the first part of the data, perform another operation on the rest of the data and aggregate the results.

Experiment with model parameters
Each call that you send to a model includes parameter values that control how the model generates a response. The model can generate different results for different parameter values. Experiment with different parameter values to get the best values for the task. The parameters available for different models may differ. The most common parameters are the following:

Max output tokens: Specifies the maximum number of tokens that can be generated in the response. A token is approximately four characters. 100 tokens correspond to roughly 60-80 words.

Temperature: The temperature controls the degree of randomness in token selection. The temperature is used for sampling during response generation, which occurs when topP and topK are applied. Lower temperatures are good for prompts that require a more deterministic or less open-ended response, while higher temperatures can lead to more diverse or creative results. A temperature of 0 is deterministic, meaning that the highest probability response is always selected.

topK: The topK parameter changes how the model selects tokens for output. A topK of 1 means the selected token is the most probable among all the tokens in the model's vocabulary (also called greedy decoding), while a topK of 3 means that the next token is selected from among the 3 most probable using the temperature. For each token selection step, the topK tokens with the highest probabilities are sampled. Tokens are then further filtered based on topP with the final token selected using temperature sampling.

topP: The topP parameter changes how the model selects tokens for output. Tokens are selected from the most to least probable until the sum of their probabilities equals the topP value. For example, if tokens A, B, and C have a probability of 0.3, 0.2, and 0.1 and the topP value is 0.5, then the model will select either A or B as the next token by using the temperature and exclude C as a candidate. The default topP value is 0.95.

stop_sequences: Set a stop sequence to tell the model to stop generating content. A stop sequence can be any sequence of characters. Try to avoid using a sequence of characters that may appear in the generated content.

Prompt iteration strategies
Prompt design can sometimes require a few iterations before you consistently get the response you're looking for. This section provides guidance on some things you can try when iterating on your prompts:

Use different phrasing: Using different words or phrasing in your prompts often yields different responses from the model even though they all mean the same thing. If you're not getting the expected results from your prompt, try rephrasing it.

Version 1:
How do I bake a pie?

Version 2:
Suggest a recipe for a pie.

Version 3:
What's a good pie recipe?

Switch to an analogous task: If you can't get the model to follow your instructions for a task, try giving it instructions for an analogous task that achieves the same result.

This prompt tells the model to categorize a book by using predefined categories:

Prompt:
Which category does The Odyssey belong to:
thriller
sci-fi
mythology
biography
Response:
The Odyssey belongs to the category of **mythology**.

Here's why:

* **Mythology:** The Odyssey tells the story of Odysseus, a hero from Greek mythology, and his
journey home after the Trojan War. It features gods, monsters, and supernatural events common to
Greek mythology.
.....
(gemini-2.5-flash)
The response is correct, but the model didn't stay within the bounds of the options. You also want to model to just respond with one of the options instead of in a full sentence. In this case, you can rephrase the instructions as a multiple choice question and ask the model to choose an option.

Prompt:
Multiple choice problem: Which of the following options describes the book The Odyssey?
Options:



thriller

sci-fi

mythology

biography
Response:
The correct answer is mythology.
(gemini-2.5-flash)
Change the order of prompt content: The order of the content in the prompt can sometimes affect the response. Try changing the content order and see how that affects the response.

Version 1:
[examples]
[context]
[input]

Version 2:
[input]
[examples]
[context]

Version 3:
[examples]
[input]
[context]
Fallback responses
A fallback response is a response returned by the model when either the prompt or the response triggers a safety filter. An example of a fallback response is "I'm not able to help with that, as I'm only a language model."

If the model responds with a fallback response, try increasing the temperature.

Things to avoid
Avoid relying on models to generate factual information.
Use with care on math and logic problems.
Generative models under the hood
This section aims to answer the question - Is there randomness in generative models' responses, or are they deterministic?

The short answer - yes to both. When you prompt a generative model, a text response is generated in two stages. In the first stage, the generative model processes the input prompt and generates a probability distribution over possible tokens (words) that are likely to come next. For example, if you prompt with the input text "The dog jumped over the ... ", the generative model will produce an array of probable next words:

[("fence", 0.77), ("ledge", 0.12), ("blanket", 0.03), ...]
This process is deterministic; a generative model will produce this same distribution every time it's input the same prompt text.

In the second stage, the generative model converts these distributions into actual text responses through one of several decoding strategies. A simple decoding strategy might select the most likely token at every timestep. This process would always be deterministic. However, you could instead choose to generate a response by randomly sampling over the distribution returned by the model. This process would be stochastic (random). Control the degree of randomness allowed in this decoding process by setting the temperature. A temperature of 0 means only the most likely tokens are selected, and there's no randomness. Conversely, a high temperature injects a high degree of randomness into the tokens selected by the model, leading to more unexpected, surprising model responses.

Next steps
Now that you have a deeper understanding of prompt design, try writing your own prompts using Google AI Studio.
To learn about multimodal prompting, see Prompting with media files.
To learn about image prompting, see the Imagen prompt guide
To learn about video prompting, see the Veo prompt guide
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackSafety settings

The Gemini API provides safety settings that you can adjust during the prototyping stage to determine if your application requires more or less restrictive safety configuration. You can adjust these settings across five filter categories to restrict or allow certain types of content.

This guide covers how the Gemini API handles safety settings and filtering and how you can change the safety settings for your application.

Note: Applications that use less restrictive safety settings may be subject to review. See the Terms of Service for more information.
Safety filters
The Gemini API's adjustable safety filters cover the following categories:

Category	Description
Harassment	Negative or harmful comments targeting identity and/or protected attributes.
Hate speech	Content that is rude, disrespectful, or profane.
Sexually explicit	Contains references to sexual acts or other lewd content.
Dangerous	Promotes, facilitates, or encourages harmful acts.
Civic integrity	Election-related queries.
These categories are defined in HarmCategory. The Gemini models only support HARM_CATEGORY_HARASSMENT, HARM_CATEGORY_HATE_SPEECH, HARM_CATEGORY_SEXUALLY_EXPLICIT, and HARM_CATEGORY_DANGEROUS_CONTENT. All other categories are used only by PaLM 2 (Legacy) models.
You can use these filters to adjust what's appropriate for your use case. For example, if you're building video game dialogue, you may deem it acceptable to allow more content that's rated as Dangerous due to the nature of the game.

In addition to the adjustable safety filters, the Gemini API has built-in protections against core harms, such as content that endangers child safety. These types of harm are always blocked and cannot be adjusted.

Content safety filtering level
The Gemini API categorizes the probability level of content being unsafe as HIGH, MEDIUM, LOW, or NEGLIGIBLE.

The Gemini API blocks content based on the probability of content being unsafe and not the severity. This is important to consider because some content can have low probability of being unsafe even though the severity of harm could still be high. For example, comparing the sentences:

The robot punched me.
The robot slashed me up.
The first sentence might result in a higher probability of being unsafe, but you might consider the second sentence to be a higher severity in terms of violence. Given this, it is important that you carefully test and consider what the appropriate level of blocking is needed to support your key use cases while minimizing harm to end users.

Safety filtering per request
You can adjust the safety settings for each request you make to the API. When you make a request, the content is analyzed and assigned a safety rating. The safety rating includes the category and the probability of the harm classification. For example, if the content was blocked due to the harassment category having a high probability, the safety rating returned would have category equal to HARASSMENT and harm probability set to HIGH.

By default, safety settings block content (including prompts) with medium or higher probability of being unsafe across any filter. This baseline safety is designed to work for most use cases, so you should only adjust your safety settings if it's consistently required for your application.

The following table describes the block settings you can adjust for each category. For example, if you set the block setting to Block few for the Hate speech category, everything that has a high probability of being hate speech content is blocked. But anything with a lower probability is allowed.

Threshold (Google AI Studio)	Threshold (API)	Description
Block none	BLOCK_NONE	Always show regardless of probability of unsafe content
Block few	BLOCK_ONLY_HIGH	Block when high probability of unsafe content
Block some	BLOCK_MEDIUM_AND_ABOVE	Block when medium or high probability of unsafe content
Block most	BLOCK_LOW_AND_ABOVE	Block when low, medium or high probability of unsafe content
N/A	HARM_BLOCK_THRESHOLD_UNSPECIFIED	Threshold is unspecified, block using default threshold
If the threshold is not set, the default block threshold is Block none (for gemini-1.5-pro-002 and gemini-1.5-flash-002 and all newer stable GA models) or Block some (in all other models) for all categories except the Civic integrity category.

The default block threshold for the Civic integrity category is Block none (for gemini-2.0-flash-001 aliased as gemini-2.0-flash, gemini-2.0-pro-exp-02-05, and gemini-2.0-flash-lite) both for Google AI Studio and the Gemini API, and Block most for all other models in Google AI Studio only.

You can set these settings for each request you make to the generative service. See the HarmBlockThreshold API reference for details.

Safety feedback
generateContent returns a GenerateContentResponse which includes safety feedback.

Prompt feedback is included in promptFeedback. If promptFeedback.blockReason is set, then the content of the prompt was blocked.

Response candidate feedback is included in Candidate.finishReason and Candidate.safetyRatings. If response content was blocked and the finishReason was SAFETY, you can inspect safetyRatings for more details. The content that was blocked is not returned.

Adjust safety settings
This section covers how to adjust the safety settings in both Google AI Studio and in your code.

Google AI Studio
You can adjust safety settings in Google AI Studio, but you cannot turn them off.

Click Edit safety settings in the Run settings panel to open the Run safety settings modal. In the modal, you can use the sliders to adjust the content filtering level per safety category:



Note: If you set any of the category filters to Block none, Google AI Studio will display a reminder about the Gemini API's Terms of Service with respect to safety settings.
When you send a request (for example, by asking the model a question), a warning No Content message appears if the request's content is blocked. To see more details, hold the pointer over the No Content text and click warning Safety.

Gemini API SDKs
The following code snippet shows how to set safety settings in your GenerateContent call. This sets the thresholds for the harassment (HARM_CATEGORY_HARASSMENT) and hate speech (HARM_CATEGORY_HATE_SPEECH) categories. For example, setting these categories to BLOCK_LOW_AND_ABOVE blocks any content that has a low or higher probability of being harassment or hate speech. To understand the threshold settings, see Safety filtering per request.

Python
Go
JavaScript
Dart (Flutter)
Kotlin
Java
REST
from google import genai
from google.genai import types

import PIL.Image

img = PIL.Image.open("cookies.jpg")

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=['Do these look store-bought or homemade?', img],
    config=types.GenerateContentConfig(
      safety_settings=[
        types.SafetySetting(
            category=types.HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold=types.HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        ),
      ]
    )
)

print(response.text)
Next steps
See the API reference to learn more about the full API.
Review the safety guidance for a general look at safety considerations when developing with LLMs.
Learn more about assessing probability versus severity from the Jigsaw team
Learn more about the products that contribute to safety solutions like the Perspective API. * You can use these safety settings to create a toxicity classifier. See the classification example to get started.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackSafety guidance

Generative artificial intelligence models are powerful tools, but they are not without their limitations. Their versatility and applicability can sometimes lead to unexpected outputs, such as outputs that are inaccurate, biased, or offensive. Post-processing, and rigorous manual evaluation are essential to limit the risk of harm from such outputs.

The models provided by the Gemini API can be used for a wide variety of generative AI and natural language processing (NLP) applications. Use of these functions is only available through the Gemini API or the Google AI Studio web app. Your use of Gemini API is also subject to the Generative AI Prohibited Use Policy and the Gemini API terms of service.

Part of what makes large language models (LLMs) so useful is that they're creative tools that can address many different language tasks. Unfortunately, this also means that large language models can generate output that you don't expect, including text that's offensive, insensitive, or factually incorrect. What's more, the incredible versatility of these models is also what makes it difficult to predict exactly what kinds of undesirable output they might produce. While the Gemini API has been designed with Google's AI principles in mind, the onus is on developers to apply these models responsibly. To aid developers in creating safe, responsible applications, the Gemini API has some built-in content filtering as well as adjustable safety settings across 4 dimensions of harm. Refer to the safety settings guide to learn more.

This document is meant to introduce you to some safety risks that can arise when using LLMs, and recommend emerging safety design and development recommendations. (Note that laws and regulations may also impose restrictions, but such considerations are beyond the scope of this guide.)

The following steps are recommended when building applications with LLMs:

Understanding the safety risks of your application
Considering adjustments to mitigate safety risks
Performing safety testing appropriate to your use case
Soliciting feedback from users and monitoring usage
The adjustment and testing phases should be iterative until you reach performance appropriate for your application.

Model implementation cycle

Understand the safety risks of your application
In this context, safety is being defined as the ability of an LLM to avoid causing harm to its users, for example, by generating toxic language or content that promotes stereotypes. The models available through the Gemini API have been designed with Google’s AI principles in mind and your use of it is subject to the Generative AI Prohibited Use Policy. The API provides built-in safety filters to help address some common language model problems such as toxic language and hate speech, and striving for inclusiveness and avoidance of stereotypes. However, each application can pose a different set of risks to its users. So as the application owner, you are responsible for knowing your users and the potential harms your application may cause, and ensuring that your application uses LLMs safely and responsibly.

As part of this assessment, you should consider the likelihood that harm could occur and determine its seriousness and mitigation steps. For example, an app that generates essays based on factual events would need to be more careful about avoiding misinformation, as compared to an app that generates fictional stories for entertainment. A good way to begin exploring potential safety risks is to research your end users, and others who might be affected by your application's results. This can take many forms including researching state of the art studies in your app domain, observing how people are using similar apps, or running a user study, survey, or conducting informal interviews with potential users.

Advanced tips
Consider adjustments to mitigate safety risks
Now that you have an understanding of the risks, you can decide how to mitigate them. Determining which risks to prioritize and how much you should do to try to prevent them is a critical decision, similar to triaging bugs in a software project. Once you've determined priorities, you can start thinking about the types of mitigations that would be most appropriate. Often simple changes can make a difference and reduce risks.

For example, when designing an application consider:

Tuning the model output to better reflect what is acceptable in your application context. Tuning can make the output of the model more predictable and consistent and therefore can help mitigate certain risks.
Providing an input method that facilities safer outputs. The exact input you give to an LLM can make a difference in the quality of the output. Experimenting with input prompts to find what works most safely in your use-case is well worth the effort, as you can then provide a UX that facilitates it. For example, you could restrict users to choose only from a drop-down list of input prompts, or offer pop-up suggestions with descriptive phrases which you've found perform safely in your application context.
Blocking unsafe inputs and filtering output before it is shown to the user. In simple situations, blocklists can be used to identify and block unsafe words or phrases in prompts or responses, or require human reviewers to manually alter or block such content.

Note: Automatically blocking based on a static list can have unintended results such as targeting a particular group that commonly uses vocabulary in the blocklist.
Using trained classifiers to label each prompt with potential harms or adversarial signals. Different strategies can then be employed on how to handle the request based on the type of harm detected. For example, If the input is overtly adversarial or abusive in nature, it could be blocked and instead output a pre-scripted response.

Advanced tip
Putting safeguards in place against deliberate misuse such as assigning each user a unique ID and imposing a limit on the volume of user queries that can be submitted in a given period. Another safeguard is to try and protect against possible prompt injection. Prompt injection, much like SQL injection, is a way for malicious users to design an input prompt that manipulates the output of the model, for example, by sending an input prompt that instructs the model to ignore any previous examples. See the Generative AI Prohibited Use Policy for details about deliberate misuse.

Adjusting functionality to something that is inherently lower risk. Tasks that are narrower in scope (e.g., extracting keywords from passages of text) or that have greater human oversight (e.g., generating short-form content that will be reviewed by a human), often pose a lower risk. So for instance, instead of creating an application to write an email reply from scratch, you might instead limit it to expanding on an outline or suggesting alternative phrasings.

Perform safety testing appropriate to your use case
Testing is a key part of building robust and safe applications, but the extent, scope and strategies for testing will vary. For example, a just-for-fun haiku generator is likely to pose less severe risks than, say, an application designed for use by law firms to summarize legal documents and help draft contracts. But the haiku generator may be used by a wider variety of users which means the potential for adversarial attempts or even unintended harmful inputs can be greater. The implementation context also matters. For instance, an application with outputs that are reviewed by human experts prior to any action being taken might be deemed less likely to produce harmful outputs than the identical application without such oversight.

It's not uncommon to go through several iterations of making changes and testing before feeling confident that you're ready to launch, even for applications that are relatively low risk. Two kinds of testing are particularly useful for AI applications:

Safety benchmarking involves designing safety metrics that reflect the ways your application could be unsafe in the context of how it is likely to get used, then testing how well your application performs on the metrics using evaluation datasets. It's good practice to think about the minimum acceptable levels of safety metrics before testing so that 1) you can evaluate the test results against those expectations and 2) you can gather the evaluation dataset based on the tests that evaluate the metrics you care about most.

Advanced tips
Adversarial testing involves proactively trying to break your application. The goal is to identify points of weakness so that you can take steps to remedy them as appropriate. Adversarial testing can take significant time/effort from evaluators with expertise in your application — but the more you do, the greater your chance of spotting problems, especially those occurring rarely or only after repeated runs of the application.

Adversarial testing is a method for systematically evaluating an ML model with the intent of learning how it behaves when provided with malicious or inadvertently harmful input:
An input may be malicious when the input is clearly designed to produce an unsafe or harmful output-- for example, asking a text generation model to generate a hateful rant about a particular religion.
An input is inadvertently harmful when the input itself may be innocuous, but produces harmful output -- for example, asking a text generation model to describe a person of a particular ethnicity and receiving a racist output.
What distinguishes an adversarial test from a standard evaluation is the composition of the data used for testing. For adversarial tests, select test data that is most likely to elicit problematic output from the model. This means probing the model's behavior for all the types of harms that are possible, including rare or unusual examples and edge-cases that are relevant to safety policies. It should also include diversity in the different dimensions of a sentence such as structure, meaning and length. You can refer to the Google's Responsible AI practices in fairness for more details on what to consider when building a test dataset.
Advanced tips
Note: LLMs are known to sometimes produce different outputs for the same input prompt. Multiple rounds of testing may be needed to catch more of the problematic outputs.
Monitor for problems
No matter how much you test and mitigate, you can never guarantee perfection, so plan upfront how you'll spot and deal with problems that arise. Common approaches include setting up a monitored channel for users to share feedback (e.g., thumbs up/down rating) and running a user study to proactively solicit feedback from a diverse mix of users — especially valuable if usage patterns are different to expectations.

Advanced tips
Next steps
Refer to the safety settings guide to learn about the adjustable safety settings available through the Gemini API.
See the intro to prompting to get started writing your first prompts.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackReAct agent from scratch with Gemini 2.5 and LangGraph

LangGraph is a framework for building stateful LLM applications, making it a good choice for constructing ReAct (Reasoning and Acting) Agents.

ReAct agents combine LLM reasoning with action execution. They iteratively think, use tools, and act on observations to achieve user goals, dynamically adapting their approach. Introduced in "ReAct: Synergizing Reasoning and Acting in Language Models" (2023), this pattern tries to mirror human-like, flexible problem-solving over rigid workflows.

While LangGraph offers a prebuilt ReAct agent (create_react_agent), it shines when you need more control and customization for your ReAct implementations.

LangGraph models agents as graphs using three key components:

State: Shared data structure (typically TypedDict or Pydantic BaseModel) representing the application's current snapshot.
Nodes: Encodes logic of your agents. They receive the current State as input, perform some computation or side-effect, and return an updated State, such as LLM calls or tool calls.
Edges: Define the next Node to execute based on the current State, allowing for conditional logic and fixed transitions.
If you don't have an API Key yet, you can get one for free at the Google AI Studio.

pip install langgraph langchain-google-genai geopy requests
Set your API key in the environment variable GEMINI_API_KEY.

import os

# Read your API key from the environment variable or set it manually
api_key = os.getenv("GEMINI_API_KEY")
To better understand how to implement a ReAct agent using LangGraph, let's walk through a practical example. You will create a simple agent whose goal is to use a tool to find the current weather for a specified location.

For this weather agent, its State will need to maintain the ongoing conversation history (as a list of messages) and a counter for the number of steps taken to further illustrate state management.

LangGraph provides a convenient helper, add_messages, for updating message lists in the state. It functions as a reducer, meaning it takes the current list and new messages, then returns a combined list. It smartly handles updates by message ID and defaults to an "append-only" behavior for new, unique messages.

Note: Since having a list of messages in the state is so common, there exists a prebuilt state called MessagesState which makes it easy to use messages.
from typing import Annotated,Sequence, TypedDict

from langchain_core.messages import BaseMessage
from langgraph.graph.message import add_messages # helper function to add messages to the state


class AgentState(TypedDict):
    """The state of the agent."""
    messages: Annotated[Sequence[BaseMessage], add_messages]
    number_of_steps: int
Next, you define your weather tool.

from langchain_core.tools import tool
from geopy.geocoders import Nominatim
from pydantic import BaseModel, Field
import requests

geolocator = Nominatim(user_agent="weather-app")

class SearchInput(BaseModel):
    location:str = Field(description="The city and state, e.g., San Francisco")
    date:str = Field(description="the forecasting date for when to get the weather format (yyyy-mm-dd)")

@tool("get_weather_forecast", args_schema=SearchInput, return_direct=True)
def get_weather_forecast(location: str, date: str):
    """Retrieves the weather using Open-Meteo API for a given location (city) and a date (yyyy-mm-dd). Returns a list dictionary with the time and temperature for each hour."""
    location = geolocator.geocode(location)
    if location:
        try:
            response = requests.get(f"https://api.open-meteo.com/v1/forecast?latitude={location.latitude}&longitude={location.longitude}&hourly=temperature_2m&start_date={date}&end_date={date}")
            data = response.json()
            return {time: temp for time, temp in zip(data["hourly"]["time"], data["hourly"]["temperature_2m"])}
        except Exception as e:
            return {"error": str(e)}
    else:
        return {"error": "Location not found"}

tools = [get_weather_forecast]
Next, you initialize your model and bind the tools to the model.

from datetime import datetime
from langchain_google_genai import ChatGoogleGenerativeAI

# Create LLM class
llm = ChatGoogleGenerativeAI(
    model= "gemini-2.5-pro",
    temperature=1.0,
    max_retries=2,
    google_api_key=api_key,
)

# Bind tools to the model
model = llm.bind_tools([get_weather_forecast])

# Test the model with tools
res=model.invoke(f"What is the weather in Berlin on {datetime.today()}?")

print(res)
The last step before you can run your agent is to define your nodes and edges. In this example, you have two nodes and one edge. - call_tool node that executes your tool method. LangGraph has a prebuilt node for this called ToolNode. - call_model node that uses the model_with_tools to call the model. - should_continue edge that decides whether to call the tool or the model.

The number of nodes and edges is not fixed. You can add as many nodes and edges as you want to your graph. For example, you could add a node for adding structured output or a self-verification/reflection node to check the model output before calling the tool or the model.

from langchain_core.messages import ToolMessage
from langchain_core.runnables import RunnableConfig

tools_by_name = {tool.name: tool for tool in tools}

# Define our tool node
def call_tool(state: AgentState):
    outputs = []
    # Iterate over the tool calls in the last message
    for tool_call in state["messages"][-1].tool_calls:
        # Get the tool by name
        tool_result = tools_by_name[tool_call["name"]].invoke(tool_call["args"])
        outputs.append(
            ToolMessage(
                content=tool_result,
                name=tool_call["name"],
                tool_call_id=tool_call["id"],
            )
        )
    return {"messages": outputs}

def call_model(
    state: AgentState,
    config: RunnableConfig,
):
    # Invoke the model with the system prompt and the messages
    response = model.invoke(state["messages"], config)
    # We return a list, because this will get added to the existing messages state using the add_messages reducer
    return {"messages": [response]}


# Define the conditional edge that determines whether to continue or not
def should_continue(state: AgentState):
    messages = state["messages"]
    # If the last message is not a tool call, then we finish
    if not messages[-1].tool_calls:
        return "end"
    # default to continue
    return "continue"
Now you have all the components to build your agent. Let's put them together.

from langgraph.graph import StateGraph, END

# Define a new graph with our state
workflow = StateGraph(AgentState)

# 1. Add our nodes 
workflow.add_node("llm", call_model)
workflow.add_node("tools",  call_tool)
# 2. Set the entrypoint as `agent`, this is the first node called
workflow.set_entry_point("llm")
# 3. Add a conditional edge after the `llm` node is called.
workflow.add_conditional_edges(
    # Edge is used after the `llm` node is called.
    "llm",
    # The function that will determine which node is called next.
    should_continue,
    # Mapping for where to go next, keys are strings from the function return, and the values are other nodes.
    # END is a special node marking that the graph is finish.
    {
        # If `tools`, then we call the tool node.
        "continue": "tools",
        # Otherwise we finish.
        "end": END,
    },
)
# 4. Add a normal edge after `tools` is called, `llm` node is called next.
workflow.add_edge("tools", "llm")

# Now we can compile and visualize our graph
graph = workflow.compile()
You can visualize your graph using the draw_mermaid_png method.

from IPython.display import Image, display

display(Image(graph.get_graph().draw_mermaid_png()))
png

Now let's run the agent.

from datetime import datetime
# Create our initial message dictionary
inputs = {"messages": [("user", f"What is the weather in Berlin on {datetime.today()}?")]}

# call our graph with streaming to see the steps
for state in graph.stream(inputs, stream_mode="values"):
    last_message = state["messages"][-1]
    last_message.pretty_print()
You can now continue with your conversation and for example ask for the weather in another city or let it compare it.

state["messages"].append(("user", "Would it be in Munich warmer?"))

for state in graph.stream(state, stream_mode="values"):
    last_message = state["messages"][-1]
    last_message.pretty_print()
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackCustomer Support Analysis with Gemini 2.5 Pro and CrewAI

CrewAI is a framework for orchestrating autonomous AI agents that collaborate to achieve complex goals. It lets you define agents by specifying roles, goals, and backstories, and then define tasks for them.

This example demonstrates how to build a multi-agent system for analyzing customer support data to identify issues and propose process improvements using Gemini 2.5 Pro, generating a report intended to be read by a Chief Operating Officer (COO).

The guide will show you how to create a "crew" of AI agents that can do the following tasks:

Fetch and analyze customer support data (simulated in this example).
Identify recurring problems and process bottlenecks.
Suggest actionable improvements.
Compile the findings into a concise report suitable for a COO.
You need a Gemini API key. If you don't already have one, you can get one in Google AI Studio.


pip install "crewai[tools]"
Set your Gemini API key as an environment variable named GEMINI_API_KEY, then configure CrewAI to use the Gemini 2.5 Pro model.

import os
from crewai import LLM

# Read your API key from the environment variable
gemini_api_key = os.getenv("GEMINI_API_KEY")

# Use Gemini 2.5 Pro Experimental model
gemini_llm = LLM(
    model='gemini/gemini-2.5-pro',
    api_key=gemini_api_key,
    temperature=0.0  # Lower temperature for more consistent results.
)
Define components
CrewAI applications are built using Tools, Agents, Tasks, and the Crew itself. Each of these is explained in the following sections.

Tools
Tools are capabilities that agents can use to interact with the outside world or perform specific actions. Here, you define a placeholder tool to simulate fetching customer support data. In a real application, you would connect to a database, API or file system. For more information on tools, see the CrewAI tools guide.

from crewai.tools import BaseTool

# Placeholder tool for fetching customer support data
class CustomerSupportDataTool(BaseTool):
    name: str = "Customer Support Data Fetcher"
    description: str = (
      "Fetches recent customer support interactions, tickets, and feedback. "
      "Returns a summary string.")

    def _run(self, argument: str) -> str:
        # In a real scenario, this would query a database or API.
        # For this example, return simulated data.
        print(f"--- Fetching data for query: {argument} ---")
        return (
            """Recent Support Data Summary:
- 50 tickets related to 'login issues'. High resolution time (avg 48h).
- 30 tickets about 'billing discrepancies'. Mostly resolved within 12h.
- 20 tickets on 'feature requests'. Often closed without resolution.
- Frequent feedback mentions 'confusing user interface' for password reset.
- High volume of calls related to 'account verification process'.
- Sentiment analysis shows growing frustration with 'login issues' resolution time.
- Support agent notes indicate difficulty reproducing 'login issues'."""
        )

support_data_tool = CustomerSupportDataTool()
Agents
Agents are the individual AI workers in your crew. Each agent has a specific role, goal, backstory, assigned llm, and optional tools. For more information on agents, see the CrewAI agents guide.

from crewai import Agent

# Agent 1: Data analyst
data_analyst = Agent(
    role='Customer Support Data Analyst',
    goal='Analyze customer support data to identify trends, recurring issues, and key pain points.',
    backstory=(
        """You are an expert data analyst specializing in customer support operations.
        Your strength lies in identifying patterns and quantifying problems from raw support data."""
    ),
    verbose=True,
    allow_delegation=False,  # This agent focuses on its specific task
    tools=[support_data_tool],  # Assign the data fetching tool
    llm=gemini_llm  # Use the configured Gemini LLM
)

# Agent 2: Process optimizer
process_optimizer = Agent(
    role='Process Optimization Specialist',
    goal='Identify bottlenecks and inefficiencies in current support processes based on the data analysis. Propose actionable improvements.',
    backstory=(
        """You are a specialist in optimizing business processes, particularly in customer support.
        You excel at pinpointing root causes of delays and inefficiencies and suggesting concrete solutions."""
    ),
    verbose=True,
    allow_delegation=False,
    # No tools needed, this agent relies on the context provided by data_analyst.
    llm=gemini_llm
)

# Agent 3: Report writer
report_writer = Agent(
    role='Executive Report Writer',
    goal='Compile the analysis and improvement suggestions into a concise, clear, and actionable report for the COO.',
    backstory=(
        """You are a skilled writer adept at creating executive summaries and reports.
        You focus on clarity, conciseness, and highlighting the most critical information and recommendations for senior leadership."""
    ),
    verbose=True,
    allow_delegation=False,
    llm=gemini_llm
)
Tasks
Tasks define the specific assignments for the agents. Each task has a description, expected_output, and is assigned to an agent. Tasks are run sequentially by default and include the context of the previous task. For more information on tasks, see the CrewAI tasks guide.

from crewai import Task

# Task 1: Analyze data
analysis_task = Task(
    description=(
        """Fetch and analyze the latest customer support interaction data (tickets, feedback, call logs)
        focusing on the last quarter. Identify the top 3-5 recurring issues, quantify their frequency
        and impact (e.g., resolution time, customer sentiment). Use the Customer Support Data Fetcher tool."""
    ),
    expected_output=(
        """A summary report detailing the key findings from the customer support data analysis, including:
- Top 3-5 recurring issues with frequency.
- Average resolution times for these issues.
- Key customer pain points mentioned in feedback.
- Any notable trends in sentiment or support agent observations."""
    ),
    agent=data_analyst  # Assign task to the data_analyst agent
)

# Task 2: Identify bottlenecks and suggest improvements
optimization_task = Task(
    description=(
        """Based on the data analysis report provided by the Data Analyst, identify the primary bottlenecks
        in the support processes contributing to the identified issues (especially the top recurring ones).
        Propose 2-3 concrete, actionable process improvements to address these bottlenecks.
        Consider potential impact and ease of implementation."""
    ),
    expected_output=(
        """A concise list identifying the main process bottlenecks (e.g., lack of documentation for agents,
        complex escalation path, UI issues) linked to the key problems.
A list of 2-3 specific, actionable recommendations for process improvement
(e.g., update agent knowledge base, simplify password reset UI, implement proactive monitoring)."""
    ),
    agent=process_optimizer  # Assign task to the process_optimizer agent
    # This task implicitly uses the output of analysis_task as context
)

# Task 3: Compile COO report
report_task = Task(
    description=(
        """Compile the findings from the Data Analyst and the recommendations from the Process Optimization Specialist
        into a single, concise executive report for the COO. The report should clearly state:
1. The most critical customer support issues identified (with brief data points).
2. The key process bottlenecks causing these issues.
3. The recommended process improvements.
Ensure the report is easy to understand, focuses on actionable insights, and is formatted professionally."""
    ),
    expected_output=(
        """A well-structured executive report (max 1 page) summarizing the critical support issues,
        underlying process bottlenecks, and clear, actionable recommendations for the COO.
        Use clear headings and bullet points."""
    ),
    agent=report_writer  # Assign task to the report_writer agent
)
Crew
The Crew brings the agents and tasks together, defining the workflow process (such as "sequential").

from crewai import Crew, Process

# Define the crew with agents, tasks, and process
support_analysis_crew = Crew(
    agents=[data_analyst, process_optimizer, report_writer],
    tasks=[analysis_task, optimization_task, report_task],
    process=Process.sequential,  # Tasks will run sequentially in the order defined
    verbose=True
)
Run the Crew
Finally, kick off the crew execution with any necessary inputs.

# Start the crew's work
print("--- Starting Customer Support Analysis Crew ---")
# The 'inputs' dictionary provides initial context if needed by the first task.
# In this case, the tool simulates data fetching regardless of the input.
result = support_analysis_crew.kickoff(inputs={'data_query': 'last quarter support data'})

print("--- Crew Execution Finished ---")
print("--- Final Report for COO ---")
print(result)
The script will now execute. The Data Analyst will use the tool, the Process Optimizer will analyze the findings, and the Report Writer will compile the final report, which is then printed to the console. The verbose=True setting will show the detailed thought process and actions of each agent.

To learn more about CrewAI, check out the CrewAI introduction.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackResearch Agent with Gemini 2.5 Pro and LlamaIndex

LlamaIndex is a framework for building knowledge agents using LLMs connected to your data. This example shows you how to build a multi-agent workflow for a Research Agent. In LlamaIndex, Workflows are the building blocks of agent or multi-agent systems.

You need a Gemini API key. If you don't already have one, you can get one in Google AI Studio. First, install all required LlamaIndex libraries.LlamaIndex uses the google-genai package under the hood.


pip install llama-index llama-index-utils-workflow llama-index-llms-google-genai llama-index-tools-google
Set up Gemini 2.5 Pro in LlamaIndex
The engine of any LlamaIndex agent is an LLM that handles reasoning and text processing. This example uses Gemini 2.5 Pro. Make sure you set your API key as an environment variable.


from llama_index.llms.google_genai import GoogleGenAI

llm = GoogleGenAI(model="gemini-2.5-pro")
Build tools
Agents use tools to interact with the outside world, like searching the web or storing information. Tools in LlamaIndex can be regular Python functions, or imported from pre-existing ToolSpecs. Gemini comes with a built-in tool for using Google Search which is used here.

from google.genai import types

google_search_tool = types.Tool(
    google_search=types.GoogleSearch()
)

llm_with_search = GoogleGenAI(
    model="gemini-2.5-pro",
    generation_config=types.GenerateContentConfig(tools=[google_search_tool])
)
Now test the LLM instance with a query that requires search:

response = llm_with_search.complete("What's the weather like today in Biarritz?")
print(response)
The Research Agent will use Python functions as tools. There are a lot of ways you could go about building a system to perform this task. In this example, you will use the following:

search_web uses Gemini with Google Search to search the web for information on the given topic.
record_notes saves research found on the web to the state so that the other tools can use it.
write_report writes the report using the information found by the ResearchAgent
review_report reviews the report and provides feedback.
The Context class passes the state between agents/tools, and each agent will have access to the current state of the system.

from llama_index.core.workflow import Context

async def search_web(ctx: Context, query: str) -> str:
    """Useful for searching the web about a specific query or topic"""
    response = await llm_with_search.acomplete(f"""Please research given this query or topic,
    and return the result\n<query_or_topic>{query}</query_or_topic>""")
    return response

async def record_notes(ctx: Context, notes: str, notes_title: str) -> str:
    """Useful for recording notes on a given topic."""
    current_state = await ctx.store.get("state")
    if "research_notes" not in current_state:
        current_state["research_notes"] = {}
    current_state["research_notes"][notes_title] = notes
    await ctx.store.set("state", current_state)
    return "Notes recorded."

async def write_report(ctx: Context, report_content: str) -> str:
    """Useful for writing a report on a given topic."""
    current_state = await ctx.store.get("state")
    current_state["report_content"] = report_content
    await ctx.store.set("state", current_state)
    return "Report written."

async def review_report(ctx: Context, review: str) -> str:
    """Useful for reviewing a report and providing feedback."""
    current_state = await ctx.store.get("state")
    current_state["review"] = review
    await ctx.store.set("state", current_state)
    return "Report reviewed."
Build a multi-agent assistant
To build a multi-agent system, you define the agents and their interactions. Your system will have three agents:

A ResearchAgent searches the web for information on the given topic.
A WriteAgent writes the report using the information found by the ResearchAgent.
A ReviewAgent reviews the report and provides feedback.
This example uses the AgentWorkflow class to create a multi-agent system that will execute these agents in order. Each agent takes a system_prompt that tells it what it should do, and suggests how to work with the other agents.

Optionally, you can help your multi-agent system by specifying which other agents it can talk to using can_handoff_to (if not, it will try to figure this out on its own).

from llama_index.core.agent.workflow import (
    AgentInput,
    AgentOutput,
    ToolCall,
    ToolCallResult,
    AgentStream,
)
from llama_index.core.agent.workflow import FunctionAgent, ReActAgent

research_agent = FunctionAgent(
    name="ResearchAgent",
    description="Useful for searching the web for information on a given topic and recording notes on the topic.",
    system_prompt=(
        "You are the ResearchAgent that can search the web for information on a given topic and record notes on the topic. "
        "Once notes are recorded and you are satisfied, you should hand off control to the WriteAgent to write a report on the topic."
    ),
    llm=llm,
    tools=[search_web, record_notes],
    can_handoff_to=["WriteAgent"],
)

write_agent = FunctionAgent(
    name="WriteAgent",
    description="Useful for writing a report on a given topic.",
    system_prompt=(
        "You are the WriteAgent that can write a report on a given topic. "
        "Your report should be in a markdown format. The content should be grounded in the research notes. "
        "Once the report is written, you should get feedback at least once from the ReviewAgent."
    ),
    llm=llm,
    tools=[write_report],
    can_handoff_to=["ReviewAgent", "ResearchAgent"],
)

review_agent = FunctionAgent(
    name="ReviewAgent",
    description="Useful for reviewing a report and providing feedback.",
    system_prompt=(
        "You are the ReviewAgent that can review a report and provide feedback. "
        "Your feedback should either approve the current report or request changes for the WriteAgent to implement."
    ),
    llm=llm,
    tools=[review_report],
    can_handoff_to=["ResearchAgent","WriteAgent"],
)
The Agents are defined, now you can create the AgentWorkflow and run it.

from llama_index.core.agent.workflow import AgentWorkflow

agent_workflow = AgentWorkflow(
    agents=[research_agent, write_agent, review_agent],
    root_agent=research_agent.name,
    initial_state={
        "research_notes": {},
        "report_content": "Not written yet.",
        "review": "Review required.",
    },
)
During execution of the workflow, you can stream events, tool calls and updates to the console.

from llama_index.core.agent.workflow import (
    AgentInput,
    AgentOutput,
    ToolCall,
    ToolCallResult,
    AgentStream,
)

research_topic = """Write me a report on the history of the web.
Briefly describe the history of the world wide web, including
the development of the internet and the development of the web,
including 21st century developments"""

handler = agent_workflow.run(
    user_msg=research_topic
)

current_agent = None
current_tool_calls = ""
async for event in handler.stream_events():
    if (
        hasattr(event, "current_agent_name")
        and event.current_agent_name != current_agent
    ):
        current_agent = event.current_agent_name
        print(f"\n{'='*50}")
        print(f"🤖 Agent: {current_agent}")
        print(f"{'='*50}\n")
    elif isinstance(event, AgentOutput):
        if event.response.content:
            print("📤 Output:", event.response.content)
        if event.tool_calls:
            print(
                "🛠️  Planning to use tools:",
                [call.tool_name for call in event.tool_calls],
            )
    elif isinstance(event, ToolCallResult):
        print(f"🔧 Tool Result ({event.tool_name}):")
        print(f"  Arguments: {event.tool_kwargs}")
        print(f"  Output: {event.tool_output}")
    elif isinstance(event, ToolCall):
        print(f"🔨 Calling Tool: {event.tool_name}")
        print(f"  With arguments: {event.tool_kwargs}")
After the workflow is complete, you can print the final output of the report, as well as the final review state from then review agent.

state = await handler.ctx.store.get("state")
print("Report Content:\n", state["report_content"])
print("\n------------\nFinal Review:\n", state["review"])
Go further with custom workflows
The AgentWorkflow is a great way to get started with multi-agent systems. But what if you need more control? You can build a workflow from scratch. Here are some reasons why you might want to build your own workflow:

More control over the process: You can decide the exact path your agents take. This includes creating loops, making decisions at certain points, or having agents work in parallel on different tasks.
Use complex data: Go beyond simple text. Custom workflows let you use more structured data, like JSON objects or custom classes, for your inputs and outputs.
Work with different media: Build agents that can understand and process not just text, but also images, audio, and video.
Smarter planning: You can design a workflow that first creates a detailed plan before the agents start working. This is useful for complex tasks that require multiple steps.
Enable self-correction: Create agents that can review their own work. If the output isn't good enough, the agent can try again, creating a loop of improvement until the result is perfect.
To learn more about LlamaIndex Workflows, see the LlamaIndex Workflows Documentation.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackMarket Research Agent with Gemini and the AI SDK by Vercel

The AI SDK by Vercel is a powerful open-source library for building AI-powered applications, user interfaces, and agents in TypeScript.

This guide will walk you through building a Node.js application with TypeScript that uses the AI SDK to connect with the Gemini API via the Google Generative AI Provider and perform automated market trend analysis. The final application will:

Use Gemini with Google Search to research current market trends.
Extract structured data from the research to generate charts.
Combine the research and charts into a professional HTML report and save it as a PDF.
Prerequisites
To complete this guide, you'll need:

A Gemini API key. You can create one for free in Google AI Studio.
Node.js version 18 or later.
A package manager, such as npm, pnpm, or yarn.
Note: While this guide focuses on a Node.js environment, the AI SDK is also fully compatible with browser-based frameworks like Next.js.
Set up your application
First, create a new directory for your project and initialize it.

npm
pnpm
yarn
mkdir market-trend-app
cd market-trend-app
npm init -y
Install dependencies
Next, install the AI SDK, the Google Generative AI provider, and other necessary dependencies.

npm
pnpm
yarn
npm install ai @ai-sdk/google zod
npm install -D @types/node tsx typescript && npx tsc --init
To prevent a TypeScript compiler error, comment out the following line in the generated tsconfig.json:

//"verbatimModuleSyntax": true,
This application will also use the third-party packages Puppeteer and Chart.js for rendering charts and creating a PDF:

npm
pnpm
yarn
npm install puppeteer chart.js
npm install -D @types/chart.js
The puppeteer package requires running a script to download the Chromium browser. Your package manager may ask for approval, so ensure you approve the script when prompted.

Configure your API key
Set the GOOGLE_GENERATIVE_AI_API_KEY environment variable with your Gemini API key. The Google Generative AI Provider automatically looks for your API key in this environment variable.

MacOS/Linux
Powershell
export GOOGLE_GENERATIVE_AI_API_KEY="YOUR_API_KEY_HERE"
Create your application
Now, let's create the main file for our application. Create a new file named main.ts in your project directory. You'll build up the logic in this file step-by-step.

For a quick test to ensure everything is set up correctly, add the following code to main.ts. This basic example uses Gemini 2.5 Flash and generateText to get a simple response from Gemini.

import { google } from "@ai-sdk/google";
import { generateText } from "ai";

async function main() {
  const { text } = await generateText({
    model: google("gemini-2.5-flash"),
    prompt: 'What is plant-based milk?',
  });

  console.log(text);
}

main().catch(console.error);
Before adding more complexity, let's run this script to verify that your environment is configured correctly. Run the following command in your terminal:

npm
pnpm
yarn
npx tsc && node main.js
If everything is set up correctly, you'll see Gemini's response printed to the console.

Perform market research with Google Search
To get up-to-date information, you can enable the Google Search tool for Gemini. When this tool is active, the model can search the web to answer the prompt and will return the sources it used.

Replace the content of main.ts with the following code to perform the first step of our analysis.

import { google } from "@ai-sdk/google";
import { generateText } from "ai";

async function main() {
  // Step 1: Search market trends
  const { text: marketTrends, sources } = await generateText({
    model: google("gemini-2.5-flash"),
    tools: {
      google_search: google.tools.googleSearch({}),
    },
    prompt: `Search the web for market trends for plant-based milk in North America for 2024-2025.
          I need to know the market size, key players and their market share, and primary consumer drivers.
          `,
  });

  console.log("Market trends found:\n", marketTrends);
  // To see the sources, uncomment the following line:
  // console.log("Sources:\n", sources);
}

main().catch(console.error);
Extract chart data
Next, let's process the research text to extract structured data suitable for charts. Use the AI SDK's generateObject function along with a zod schema to define the exact data structure.

Also create a helper function to convert this structured data into a configuration that Chart.js can understand.

Add the following code to main.ts. Note the new imports and the added "Step 2".

import { google } from "@ai-sdk/google";
import { generateText, generateObject } from "ai";
import { z } from "zod/v4";
import { ChartConfiguration } from "chart.js";

// Helper function to create Chart.js configurations
function createChartConfig({labels, data, label, type, colors,}: {
  labels: string[];
  data: number[];
  label: string;
  type: "bar" | "line";
  colors: string[];
}): ChartConfiguration {
  return {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          borderWidth: 1,
          ...(type === "bar" && { backgroundColor: colors }),
          ...(type === "line" && colors.length > 0 && { borderColor: colors[0] }),
        },
      ],
    },
    options: {
      animation: { duration: 0 }, // Disable animations for static PDF rendering
    },
  };
}

async function main() {
  // Step 1: Search market trends
  const { text: marketTrends, sources } = await generateText({
    model: google("gemini-2.5-flash"),
    tools: {
      google_search: google.tools.googleSearch({}),
    },
    prompt: `Search the web for market trends for plant-based milk in North America for 2024-2025.
          I need to know the market size, key players and their market share, and primary consumer drivers.
          `,
  });

  console.log("Market trends found.");

  // Step 2: Extract chart data
  const { object: chartData } = await generateObject({
    model: google("gemini-2.5-flash"),
    schema: z.object({
      chartConfigurations: z
        .array(
          z.object({
            type: z.enum(["bar", "line"]).describe('The type of chart to generate. Either "bar" or "line"',),
            labels: z.array(z.string()).describe("A list of chart labels"),
            data: z.array(z.number()).describe("A list of the chart data"),
            label: z.string().describe("A label for the chart"),
            colors: z.array(z.string()).describe('A list of colors to use for the chart, e.g. "rgba(255, 99, 132, 0.8)"',),
          }),
        )
        .describe("A list of chart configurations"),
    }),
    prompt: `Given the following market trends text, come up with a list of 1-3 meaningful bar or line charts
    and generate chart data.
    
Market Trends:
${marketTrends}
`,
  });

  const chartConfigs = chartData.chartConfigurations.map(createChartConfig);

  console.log("Chart configurations generated.");
}

main().catch(console.error);
Generate the final report
In the final step, instruct Gemini to act as an expert report writer. Provide it with the market research, the chart configurations, and a clear set of instructions for building an HTML report. Then, use Puppeteer to render this HTML and save it as a PDF.

Add the final puppeteer import and "Step 3" to your main.ts file.

// ... (imports from previous step)
import puppeteer from "puppeteer";

// ... (createChartConfig helper function from previous step)

async function main() {
  // ... (Step 1 and 2 from previous step)

  // Step 3: Generate the final HTML report and save it as a PDF
  const { text: htmlReport } = await generateText({
    model: google("gemini-2.5-flash"),
    prompt: `You are an expert financial analyst and report writer.
    Your task is to generate a comprehensive market analysis report in HTML format.

    **Instructions:**
    1.  Write a full HTML document.
    2.  Use the provided "Market Trends" text to write the main body of the report. Structure it with clear headings and paragraphs.
    3.  Incorporate the provided "Chart Configurations" to visualize the data. For each chart, you MUST create a unique <canvas> element and a corresponding <script> block to render it using Chart.js.
    4.  Reference the "Sources" at the end of the report.
    5.  Do not include any placeholder data; use only the information provided.
    6.  Return only the raw HTML code.

    **Chart Rendering Snippet:**
    Include this script in the head of the HTML: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    For each chart, use a structure like below, ensuring the canvas 'id' is unique for each chart, and apply the correspinding config:

    ---
    <div style="width: 800px; height: 600px;">
      <canvas id="chart1"></canvas>
    </div>
    <script>
      new Chart(document.getElementById('chart1'), config);
    </script>
    ---
    (For the second chart, use 'chart2' and the corresponding config, and so on.)

    **Data:**
    - Market Trends: ${marketTrends}
    - Chart Configurations: ${JSON.stringify(chartConfigs)}
    - Sources: ${JSON.stringify(sources)}
    `,
  });

  // LLMs may wrap the HTML in a markdown code block, so strip it.
  const finalHtml = htmlReport.replace(/^```html\n/, "").replace(/\n```$/, "");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(finalHtml);
  await page.pdf({ path: "report.pdf", format: "A4" });
  await browser.close();

  console.log("\nReport generated successfully: report.pdf");
}

main().catch(console.error);
Run your application
You are now ready to run the application. Execute the following command in your terminal:

npm
pnpm
yarn
npx tsc && node main.js
You will see logging in your terminal as the script executes each step. Once complete, a report.pdf file containing your market analysis will be created in your project directory.

Below, you'll see the first two pages of an example PDF report:

Market analysis report

Further resources
For more information about building with Gemini and the AI SDK, explore these resources:

AI SDK docs
AI SDK Google Generative AI docs
AI SDK cookbook: Get Started with Gemini 2.5
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackMigrate to the Google GenAI SDK

Starting with the Gemini 2.0 release in late 2024, we introduced a new set of libraries called the Google GenAI SDK. It offers an improved developer experience through an updated client architecture, and simplifies the transition between developer and enterprise workflows.

The Google GenAI SDK is now in General Availability (GA) across all supported platforms. If you're using one of our legacy libraries, we strongly recommend you to migrate.

This guide provides before-and-after examples of migrated code to help you get started.

Note: The Go examples omit imports and other boilerplate code to improve readability.
Installation
Before

Python
JavaScript
Go

pip install -U -q "google-generativeai"
After

Python
JavaScript
Go
pip install -U -q "google-genai"
API access
The old SDK implicitly handled the API client behind the scenes using a variety of ad hoc methods. This made it hard to manage the client and credentials. Now, you interact through a central Client object. This Client object acts as a single entry point for various API services (e.g., models, chats, files, tunings), promoting consistency and simplifying credential and configuration management across different API calls.

Before (Less Centralized API Access)

Python
JavaScript
Go
The old SDK didn't explicitly use a top-level client object for most API calls. You would directly instantiate and interact with GenerativeModel objects.

import google.generativeai as genai

# Directly create and use model objects
model = genai.GenerativeModel('gemini-1.5-flash')
response = model.generate_content(...)
chat = model.start_chat(...)
After (Centralized Client Object)

Python
JavaScript
Go
from google import genai

# Create a single client object
client = genai.Client()

# Access API methods through services on the client object
response = client.models.generate_content(...)
chat = client.chats.create(...)
my_file = client.files.upload(...)
tuning_job = client.tunings.tune(...)
Authentication
Both legacy and new libraries authenticate using API keys. You can create your API key in Google AI Studio.

Before

Python
JavaScript
Go
The old SDK handled the API client object implicitly.

import google.generativeai as genai

genai.configure(api_key=...)
After

Python
JavaScript
Go
With Google GenAI SDK, you create an API client first, which is used to call the API. The new SDK will pick up your API key from either one of the GEMINI_API_KEY or GOOGLE_API_KEY environment variables, if you don't pass one to the client.

export GEMINI_API_KEY="YOUR_API_KEY"
from google import genai

client = genai.Client() # Set the API key using the GEMINI_API_KEY env var.
                        # Alternatively, you could set the API key explicitly:
                        # client = genai.Client(api_key="your_api_key")
Generate content
Text
Before

Python
JavaScript
Go
Previously, there were no client objects, you accessed APIs directly through GenerativeModel objects.

import google.generativeai as genai

model = genai.GenerativeModel('gemini-1.5-flash')
response = model.generate_content(
    'Tell me a story in 300 words'
)
print(response.text)
After

Python
JavaScript
Go
The new Google GenAI SDK provides access to all the API methods through the Client object. Except for a few stateful special cases (chat and live-api sessions), these are all stateless functions. For utility and uniformity, objects returned are pydantic classes.

from google import genai
client = genai.Client()

response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents='Tell me a story in 300 words.'
)
print(response.text)

print(response.model_dump_json(
    exclude_none=True, indent=4))
Image
Before

Python
JavaScript
Go
import google.generativeai as genai

model = genai.GenerativeModel('gemini-1.5-flash')
response = model.generate_content([
    'Tell me a story based on this image',
    Image.open(image_path)
])
print(response.text)
After

Python
JavaScript
Go
Many of the same convenience features exist in the new SDK. For example, PIL.Image objects are automatically converted.

from google import genai
from PIL import Image

client = genai.Client()

response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents=[
        'Tell me a story based on this image',
        Image.open(image_path)
    ]
)
print(response.text)
Streaming
Before

Python
JavaScript
Go
import google.generativeai as genai

response = model.generate_content(
    "Write a cute story about cats.",
    stream=True)
for chunk in response:
    print(chunk.text)
After

Python
JavaScript
Go
from google import genai

client = genai.Client()

for chunk in client.models.generate_content_stream(
  model='gemini-2.0-flash',
  contents='Tell me a story in 300 words.'
):
    print(chunk.text)
Configuration
Before

Python
JavaScript
Go
import google.generativeai as genai

model = genai.GenerativeModel(
  'gemini-1.5-flash',
    system_instruction='you are a story teller for kids under 5 years old',
    generation_config=genai.GenerationConfig(
      max_output_tokens=400,
      top_k=2,
      top_p=0.5,
      temperature=0.5,
      response_mime_type='application/json',
      stop_sequences=['\n'],
    )
)
response = model.generate_content('tell me a story in 100 words')
After

Python
JavaScript
Go
For all methods in the new SDK, the required arguments are provided as keyword arguments. All optional inputs are provided in the config argument. Config arguments can be specified as either Python dictionaries or Config classes in the google.genai.types namespace. For utility and uniformity, all definitions within the types module are pydantic classes.

from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
  model='gemini-2.0-flash',
  contents='Tell me a story in 100 words.',
  config=types.GenerateContentConfig(
      system_instruction='you are a story teller for kids under 5 years old',
      max_output_tokens= 400,
      top_k= 2,
      top_p= 0.5,
      temperature= 0.5,
      response_mime_type= 'application/json',
      stop_sequences= ['\n'],
      seed=42,
  ),
)
Safety settings
Generate a response with safety settings:

Before

Python
JavaScript
import google.generativeai as genai

model = genai.GenerativeModel('gemini-1.5-flash')
response = model.generate_content(
    'say something bad',
    safety_settings={
        'HATE': 'BLOCK_ONLY_HIGH',
        'HARASSMENT': 'BLOCK_ONLY_HIGH',
  }
)
After

Python
JavaScript
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
  model='gemini-2.0-flash',
  contents='say something bad',
  config=types.GenerateContentConfig(
      safety_settings= [
          types.SafetySetting(
              category='HARM_CATEGORY_HATE_SPEECH',
              threshold='BLOCK_ONLY_HIGH'
          ),
      ]
  ),
)
Async
Before

Python
import google.generativeai as genai

model = genai.GenerativeModel('gemini-1.5-flash')
response = model.generate_content_async(
    'tell me a story in 100 words'
)
After

Python
To use the new SDK with asyncio, there is a separate async implementation of every method under client.aio.

from google import genai

client = genai.Client()

response = await client.aio.models.generate_content(
    model='gemini-2.0-flash',
    contents='Tell me a story in 300 words.'
)
Chat
Start a chat and send a message to the model:

Before

Python
JavaScript
Go
import google.generativeai as genai

model = genai.GenerativeModel('gemini-1.5-flash')
chat = model.start_chat()

response = chat.send_message(
    "Tell me a story in 100 words")
response = chat.send_message(
    "What happened after that?")
After

Python
JavaScript
Go
from google import genai

client = genai.Client()

chat = client.chats.create(model='gemini-2.0-flash')

response = chat.send_message(
    message='Tell me a story in 100 words')
response = chat.send_message(
    message='What happened after that?')
Function calling
Before

Python
import google.generativeai as genai
from enum import Enum

def get_current_weather(location: str) -> str:
    """Get the current whether in a given location.

    Args:
        location: required, The city and state, e.g. San Franciso, CA
        unit: celsius or fahrenheit
    """
    print(f'Called with: {location=}')
    return "23C"

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    tools=[get_current_weather]
)

response = model.generate_content("What is the weather in San Francisco?")
function_call = response.candidates[0].parts[0].function_call
After

Python
In the new SDK, automatic function calling is the default. Here, you disable it.

from google import genai
from google.genai import types

client = genai.Client()

def get_current_weather(location: str) -> str:
    """Get the current whether in a given location.

    Args:
        location: required, The city and state, e.g. San Franciso, CA
        unit: celsius or fahrenheit
    """
    print(f'Called with: {location=}')
    return "23C"

response = client.models.generate_content(
  model='gemini-2.0-flash',
  contents="What is the weather like in Boston?",
  config=types.GenerateContentConfig(
      tools=[get_current_weather],
      automatic_function_calling={'disable': True},
  ),
)

function_call = response.candidates[0].content.parts[0].function_call
Automatic function calling
Before

Python
The old SDK only supports automatic function calling in chat. In the new SDK this is the default behavior in generate_content.

import google.generativeai as genai

def get_current_weather(city: str) -> str:
    return "23C"

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    tools=[get_current_weather]
)

chat = model.start_chat(
    enable_automatic_function_calling=True)
result = chat.send_message("What is the weather in San Francisco?")
After

Python
from google import genai
from google.genai import types
client = genai.Client()

def get_current_weather(city: str) -> str:
    return "23C"

response = client.models.generate_content(
  model='gemini-2.0-flash',
  contents="What is the weather like in Boston?",
  config=types.GenerateContentConfig(
      tools=[get_current_weather]
  ),
)
Code execution
Code execution is a tool that allows the model to generate Python code, run it, and return the result.

Before

Python
JavaScript
import google.generativeai as genai

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    tools="code_execution"
)

result = model.generate_content(
  "What is the sum of the first 50 prime numbers? Generate and run code for "
  "the calculation, and make sure you get all 50.")
After

Python
JavaScript
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents='What is the sum of the first 50 prime numbers? Generate and run '
            'code for the calculation, and make sure you get all 50.',
    config=types.GenerateContentConfig(
        tools=[types.Tool(code_execution=types.ToolCodeExecution)],
    ),
)
Search grounding
GoogleSearch (Gemini>=2.0) and GoogleSearchRetrieval (Gemini < 2.0) are tools that allow the model to retrieve public web data for grounding, powered by Google.

Before

Python
import google.generativeai as genai

model = genai.GenerativeModel('gemini-1.5-flash')
response = model.generate_content(
    contents="what is the Google stock price?",
    tools='google_search_retrieval'
)
After

Python
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents='What is the Google stock price?',
    config=types.GenerateContentConfig(
        tools=[
            types.Tool(
                google_search=types.GoogleSearch()
            )
        ]
    )
)
JSON response
Generate answers in JSON format.

Before

Python
JavaScript
By specifying a response_schema and setting response_mime_type="application/json" users can constrain the model to produce a JSON response following a given structure.

import google.generativeai as genai
import typing_extensions as typing

class CountryInfo(typing.TypedDict):
    name: str
    population: int
    capital: str
    continent: str
    major_cities: list[str]
    gdp: int
    official_language: str
    total_area_sq_mi: int

model = genai.GenerativeModel(model_name="gemini-1.5-flash")
result = model.generate_content(
    "Give me information of the United States",
    generation_config=genai.GenerationConfig(
        response_mime_type="application/json",
        response_schema = CountryInfo
    ),
)
After

Python
JavaScript
The new SDK uses pydantic classes to provide the schema (although you can pass a genai.types.Schema, or equivalent dict). When possible, the SDK will parse the returned JSON, and return the result in response.parsed. If you provided a pydantic class as the schema the SDK will convert that JSON to an instance of the class.

from google import genai
from pydantic import BaseModel

client = genai.Client()

class CountryInfo(BaseModel):
    name: str
    population: int
    capital: str
    continent: str
    major_cities: list[str]
    gdp: int
    official_language: str
    total_area_sq_mi: int

response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents='Give me information of the United States.',
    config={
        'response_mime_type': 'application/json',
        'response_schema': CountryInfo,
    },
)

response.parsed
Files
Upload
Upload a file:

Before

Python
import requests
import pathlib
import google.generativeai as genai

# Download file
response = requests.get(
    'https://storage.googleapis.com/generativeai-downloads/data/a11.txt')
pathlib.Path('a11.txt').write_text(response.text)

file = genai.upload_file(path='a11.txt')

model = genai.GenerativeModel('gemini-1.5-flash')
response = model.generate_content([
    'Can you summarize this file:',
    my_file
])
print(response.text)
After

Python
import requests
import pathlib
from google import genai

client = genai.Client()

# Download file
response = requests.get(
    'https://storage.googleapis.com/generativeai-downloads/data/a11.txt')
pathlib.Path('a11.txt').write_text(response.text)

my_file = client.files.upload(file='a11.txt')

response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents=[
        'Can you summarize this file:',
        my_file
    ]
)
print(response.text)
List and get
List uploaded files and get an uploaded file with a filename:

Before

Python
import google.generativeai as genai

for file in genai.list_files():
  print(file.name)

file = genai.get_file(name=file.name)
After

Python
from google import genai
client = genai.Client()

for file in client.files.list():
    print(file.name)

file = client.files.get(name=file.name)
Delete
Delete a file:

Before

Python
import pathlib
import google.generativeai as genai

pathlib.Path('dummy.txt').write_text(dummy)
dummy_file = genai.upload_file(path='dummy.txt')

file = genai.delete_file(name=dummy_file.name)
After

Python
import pathlib
from google import genai

client = genai.Client()

pathlib.Path('dummy.txt').write_text(dummy)
dummy_file = client.files.upload(file='dummy.txt')

response = client.files.delete(name=dummy_file.name)
Context caching
Context caching allows the user to pass the content to the model once, cache the input tokens, and then refer to the cached tokens in subsequent calls to lower the cost.

Before

Python
JavaScript
import requests
import pathlib
import google.generativeai as genai
from google.generativeai import caching

# Download file
response = requests.get(
    'https://storage.googleapis.com/generativeai-downloads/data/a11.txt')
pathlib.Path('a11.txt').write_text(response.text)

# Upload file
document = genai.upload_file(path="a11.txt")

# Create cache
apollo_cache = caching.CachedContent.create(
    model="gemini-1.5-flash-001",
    system_instruction="You are an expert at analyzing transcripts.",
    contents=[document],
)

# Generate response
apollo_model = genai.GenerativeModel.from_cached_content(
    cached_content=apollo_cache
)
response = apollo_model.generate_content("Find a lighthearted moment from this transcript")
After

Python
JavaScript
import requests
import pathlib
from google import genai
from google.genai import types

client = genai.Client()

# Check which models support caching.
for m in client.models.list():
  for action in m.supported_actions:
    if action == "createCachedContent":
      print(m.name)
      break

# Download file
response = requests.get(
    'https://storage.googleapis.com/generativeai-downloads/data/a11.txt')
pathlib.Path('a11.txt').write_text(response.text)

# Upload file
document = client.files.upload(file='a11.txt')

# Create cache
model='gemini-1.5-flash-001'
apollo_cache = client.caches.create(
      model=model,
      config={
          'contents': [document],
          'system_instruction': 'You are an expert at analyzing transcripts.',
      },
  )

# Generate response
response = client.models.generate_content(
    model=model,
    contents='Find a lighthearted moment from this transcript',
    config=types.GenerateContentConfig(
        cached_content=apollo_cache.name,
    )
)
Count tokens
Count the number of tokens in a request.

Before

Python
JavaScript
import google.generativeai as genai

model = genai.GenerativeModel('gemini-1.5-flash')
response = model.count_tokens(
    'The quick brown fox jumps over the lazy dog.')
After

Python
JavaScript
from google import genai

client = genai.Client()

response = client.models.count_tokens(
    model='gemini-2.0-flash',
    contents='The quick brown fox jumps over the lazy dog.',
)
Generate images
Generate images:

Before

Python
#pip install https://github.com/google-gemini/generative-ai-python@imagen
import google.generativeai as genai

imagen = genai.ImageGenerationModel(
    "imagen-3.0-generate-001")
gen_images = imagen.generate_images(
    prompt="Robot holding a red skateboard",
    number_of_images=1,
    safety_filter_level="block_low_and_above",
    person_generation="allow_adult",
    aspect_ratio="3:4",
)
After

Python
from google import genai

client = genai.Client()

gen_images = client.models.generate_images(
    model='imagen-3.0-generate-001',
    prompt='Robot holding a red skateboard',
    config=types.GenerateImagesConfig(
        number_of_images= 1,
        safety_filter_level= "BLOCK_LOW_AND_ABOVE",
        person_generation= "ALLOW_ADULT",
        aspect_ratio= "3:4",
    )
)

for n, image in enumerate(gen_images.generated_images):
    pathlib.Path(f'{n}.png').write_bytes(
        image.image.image_bytes)
Embed content
Generate content embeddings.

Before

Python
JavaScript
import google.generativeai as genai

response = genai.embed_content(
  model='models/gemini-embedding-001',
  content='Hello world'
)
After

Python
JavaScript
from google import genai

client = genai.Client()

response = client.models.embed_content(
  model='gemini-embedding-001',
  contents='Hello world',
)
Tune a Model
Create and use a tuned model.

The new SDK simplifies tuning with client.tunings.tune, which launches the tuning job and polls until the job is complete.

Before

Python
import google.generativeai as genai
import random

# create tuning model
train_data = {}
for i in range(1, 6):
  key = f'input {i}'
  value = f'output {i}'
  train_data[key] = value

name = f'generate-num-{random.randint(0,10000)}'
operation = genai.create_tuned_model(
    source_model='models/gemini-1.5-flash-001-tuning',
    training_data=train_data,
    id = name,
    epoch_count = 5,
    batch_size=4,
    learning_rate=0.001,
)
# wait for tuning complete
tuningProgress = operation.result()

# generate content with the tuned model
model = genai.GenerativeModel(model_name=f'tunedModels/{name}')
response = model.generate_content('55')
After

Python
from google import genai
from google.genai import types

client = genai.Client()

# Check which models are available for tuning.
for m in client.models.list():
  for action in m.supported_actions:
    if action == "createTunedModel":
      print(m.name)
      break

# create tuning model
training_dataset=types.TuningDataset(
        examples=[
            types.TuningExample(
                text_input=f'input {i}',
                output=f'output {i}',
            )
            for i in range(5)
        ],
    )
tuning_job = client.tunings.tune(
    base_model='models/gemini-1.5-flash-001-tuning',
    training_dataset=training_dataset,
    config=types.CreateTuningJobConfig(
        epoch_count= 5,
        batch_size=4,
        learning_rate=0.001,
        tuned_model_display_name="test tuned model"
    )
)

# generate content with the tuned model
response = client.models.generate_content(
    model=tuning_job.tuned_model.model,
    contents='55',
)
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackRelease notes

This page documents updates to the Gemini API.

October 2, 2025
Launched Gemini 2.5 Flash Image GA: Image Generation with Gemini
September 29, 2025
The following Gemini 1.5 models are now deprecated:
gemini-1.5-pro
gemini-1.5-flash-8b
gemini-1.5-flash
September 25, 2025
Released Gemini Robotics-ER 1.5 model in preview. See the Robotics overview to learn about how to use the model for your robotics application.

Launched following preview models:

gemini-2.5-flash-preview-09-2025
gemini-2.5-flash-lite-preview-09-2025
See the Models page for details.

September 23, 2025
Released gemini-2.5-flash-native-audio-preview-09-2025, a new native audio model for the Live API with improved function calling and speech cut off handling. To learn more, see the Live API guide and Gemini 2.5 Flash Native Audio.
September 16, 2025
The following models will be deprecated in October, 2025:

embedding-001
embedding-gecko-001
gemini-embedding-exp-03-07 (gemini-embedding-exp)
See the Embeddings page for details on the latest embeddings model.

September 10, 2025
Released support for the Embeddings model in Batch API, and added Batch API to the OpenAI compatibility library for even easier ways to get started with batch queries.
September 9, 2025
Launched Veo 3 and Veo 3 Fast GA, with lower pricing and new options for aspect ratios, resolution, and seeding. Read the Veo documentation for more information.
August 26, 2025
Launched Gemini 2.5 Image Preview, our latest native image generation model.
August 18, 2025
Released URL context tool to general availability (GA), a tool for providing URLs as additional context to prompts. Support for using URL context with the gemini-2.0-flash model (available during experimental release) will be discontinued in one week.
August 14, 2025
Released Imagen 4 Ultra, Standard and Fast models as generally available (GA). To learn more, see the Imagen page.
August 7, 2025
allow_adult setting in Image to Video generation are now available in restricted regions. See the Veo page for details.
July 31, 2025
Launched image-to-video generation for the Veo 3 Preview model.
Released Veo 3 Fast Preview model.
To learn more about Veo 3, visit the Veo page.
July 22, 2025
Released gemini-2.5-flash-lite, our fast, low-cost, high-performance Gemini 2.5 model. To learn more, see Gemini 2.5 Flash-Lite.
July 17, 2025
Launched veo-3.0-generate-preview, the latest update to Veo introducing video with audio generation. To learn more about Veo 3, visit the Veo page.

Increased rate limits for Imagen 4 Standard and Ultra. Visit the Rate limits page for more details.

July 14, 2025
Released gemini-embedding-001, the stable version of our text embedding model. To learn more, see embeddings. The gemini-embedding-exp-03-07 model will be deprecated on August 14, 2025.
July 7, 2025
Launched Gemini API Batch Mode. Batch up requests and send them to process asynchronously. To learn more, see Batch Mode.
June 26, 2025
The preview models gemini-2.5-pro-preview-05-06 and gemini-2.5-pro-preview-03-25 are now redirecting to the latest stable version gemini-2.5-pro.

gemini-2.5-pro-exp-03-25 is deprecated.

June 24, 2025
Released Imagen 4 Ultra and Standard Preview models. To learn more, see the Image generation page.
June 17, 2025
Released gemini-2.5-pro, the stable version of our most powerful model, now with adaptive thinking. To learn more, see Gemini 2.5 Pro and Thinking. gemini-2.5-pro-preview-05-06 will be redirected to gemini-2.5-pro on June 26, 2025.
Released gemini-2.5-flash, our first stable 2.5 Flash model. To learn more, see Gemini 2.5 Flash. gemini-2.5-flash-preview-04-17 will be deprecated on July 15, 2025.
Released gemini-2.5-flash-lite-preview-06-17, a low-cost, high-performance Gemini 2.5 model. To learn more, see Gemini 2.5 Flash-Lite Preview.
June 05, 2025
Released gemini-2.5-pro-preview-06-05, a new version of our most powerful model, now with adaptive thinking. To learn more, see Gemini 2.5 Pro Preview and Thinking. gemini-2.5-pro-preview-05-06 will be redirected to gemini-2.5-pro on June 26, 2025.
May 20, 2025
API updates:

Launched support for custom video preprocessing using clipping intervals and configurable frame rate sampling.
Launched multi-tool use, which supports configuring code execution and Grounding with Google Search on the same generateContent request.
Launched support for asynchronous function calls in the Live API.
Launched an experimental URL context tool for providing URLs as additional context to prompts.
Model updates:

Released gemini-2.5-flash-preview-05-20, a Gemini preview model optimized for price-performance and adaptive thinking. To learn more, see Gemini 2.5 Flash Preview and Thinking.
Released the gemini-2.5-pro-preview-tts and gemini-2.5-flash-preview-tts models, which are capable of generating speech with one or two speakers.
Released the lyria-realtime-exp model, which generates music in real time.
Released gemini-2.5-flash-preview-native-audio-dialog and gemini-2.5-flash-exp-native-audio-thinking-dialog, new Gemini models for the Live API with native audio output capabilities. To learn more, see the Live API guide and Gemini 2.5 Flash Native Audio.
Released gemma-3n-e4b-it preview, available on AI Studio and through the Gemini API, as part of the Gemma 3n launch.
May 7, 2025
Released gemini-2.0-flash-preview-image-generation, a preview model for generating and editing images. To learn more, see Image generation and Gemini 2.0 Flash Preview Image Generation.
May 6, 2025
Released gemini-2.5-pro-preview-05-06, a new version of our most powerful model, with improvements on code and function calling. gemini-2.5-pro-preview-03-25 will automatically point to the new version of the model.
April 17, 2025
Released gemini-2.5-flash-preview-04-17, a Gemini preview model optimized for price-performance and adaptive thinking. To learn more, see Gemini 2.5 Flash Preview and Thinking.
April 16, 2025
Launched context caching for Gemini 2.0 Flash.
April 9, 2025
Model updates:

Released veo-2.0-generate-001, a generally available (GA) text- and image-to-video model, capable of generating detailed and artistically nuanced videos. To learn more, see the Veo docs.
Released gemini-2.0-flash-live-001, a public preview version of the Live API model with billing enabled.

Enhanced Session Management and Reliability

Session Resumption: Keep sessions alive across temporary network disruptions. The API now supports server-side session state storage (for up to 24 hours) and provides handles (session_resumption) to reconnect and resume where you left off.
Longer Sessions via Context Compression: Enable extended interactions beyond previous time limits. Configure context window compression with a sliding window mechanism to automatically manage context length, preventing abrupt terminations due to context limits.
Graceful Disconnect Notification: Receive a GoAway server message indicating when a connection is about to close, allowing for graceful handling before termination.
More Control over Interaction Dynamics

Configurable Voice Activity Detection (VAD): Choose sensitivity levels or disable automatic VAD entirely and use new client events (activityStart, activityEnd) for manual turn control.

Configurable Interruption Handling: Decide whether user input should interrupt the model's response.

Configurable Turn Coverage: Choose whether the API processes all audio and video input continuously or only captures it when the end-user is detected speaking.

Configurable Media Resolution: Optimize for quality or token usage by selecting the resolution for input media.

Richer Output and Features

Expanded Voice & Language Options: Choose from two new voices and 30 new languages for audio output. The output language is now configurable within speechConfig.

Text Streaming: Receive text responses incrementally as they are generated, enabling faster display to the user.

Token Usage Reporting: Gain insights into usage with detailed token counts provided in the usageMetadata field of server messages, broken down by modality and prompt or response phases.

April 4, 2025
Released gemini-2.5-pro-preview-03-25, a public preview Gemini 2.5 Pro version with billing enabled. You can continue to use gemini-2.5-pro-exp-03-25 on the free tier.
March 25, 2025
Released gemini-2.5-pro-exp-03-25, a public experimental Gemini model with thinking mode always on by default. To learn more, see Gemini 2.5 Pro Experimental.
March 12, 2025
Model updates:

Launched an experimental Gemini 2.0 Flash model capable of image generation and editing.
Released gemma-3-27b-it, available on AI Studio and through the Gemini API, as part of the Gemma 3 launch.
API updates:

Added support for YouTube URLs as a media source.
Added support for including an inline video of less than 20MB.
March 11, 2025
SDK updates:

Released the Google Gen AI SDK for TypeScript and JavaScript to public preview.
March 7, 2025
Model updates:

Released gemini-embedding-exp-03-07, an experimental Gemini-based embeddings model in public preview.
February 28, 2025
API updates:

Support for Search as a tool added to gemini-2.0-pro-exp-02-05, an experimental model based on Gemini 2.0 Pro.
February 25, 2025
Model updates:

Released gemini-2.0-flash-lite, a generally available (GA) version of Gemini 2.0 Flash-Lite, which is optimized for speed, scale, and cost efficiency.
February 19, 2025
AI Studio updates:

Support for additional regions (Kosovo, Greenland and Faroe Islands).
API updates:

Support for additional regions (Kosovo, Greenland and Faroe Islands).
February 18, 2025
Model updates:

Gemini 1.0 Pro is no longer supported. For the list of supported models, see Gemini models.
February 11, 2025
API updates:

Updates on the OpenAI libraries compatibility.
February 6, 2025
Model updates:

Released imagen-3.0-generate-002, a generally available (GA) version of Imagen 3 in the Gemini API.
SDK updates:

Released the Google Gen AI SDK for Java for public preview.
February 5, 2025
Model updates:

Released gemini-2.0-flash-001, a generally available (GA) version of Gemini 2.0 Flash that supports text-only output.
Released gemini-2.0-pro-exp-02-05, an experimental public preview version of Gemini 2.0 Pro.
Released gemini-2.0-flash-lite-preview-02-05, an experimental public preview model optimized for cost efficiency.
API updates:

Added file input and graph output support to code execution.
SDK updates:

Released the Google Gen AI SDK for Python to general availability (GA).
January 21, 2025
Model updates:

Released gemini-2.0-flash-thinking-exp-01-21, the latest preview version of the model behind the Gemini 2.0 Flash Thinking Model.
December 19, 2024
Model updates:

Released Gemini 2.0 Flash Thinking Mode for public preview. Thinking Mode is a test-time compute model that lets you see the model's thought process while it generates a response, and produces responses with stronger reasoning capabilities.

Read more about Gemini 2.0 Flash Thinking Mode in our overview page.

December 11, 2024
Model updates:

Released Gemini 2.0 Flash Experimental for public preview. Gemini 2.0 Flash Experimental's partial list of features includes:
Twice as fast as Gemini 1.5 Pro
Bidirectional streaming with our Live API
Multimodal response generation in the form of text, images, and speech
Built-in tool use with multi-turn reasoning to use features like code execution, Search, function calling, and more
Read more about Gemini 2.0 Flash in our overview page.

November 21, 2024
Model updates:

Released gemini-exp-1121, an even more powerful experimental Gemini API model.
Model updates:

Updated the gemini-1.5-flash-latest and gemini-1.5-flash model aliases to use gemini-1.5-flash-002.
Change to top_k parameter: The gemini-1.5-flash-002 model supports top_k values between 1 and 41 (exclusive). Values greater than 40 will be changed to 40.
November 14, 2024
Model updates:

Released gemini-exp-1114, a powerful experimental Gemini API model.
November 8, 2024
API updates:

Added support for Gemini in the OpenAI libraries / REST API.
October 31, 2024
API updates:

Added support for Grounding with Google Search.
October 3, 2024
Model updates:

Released gemini-1.5-flash-8b-001, a stable version of our smallest Gemini API model.
September 24, 2024
Model updates:

Released gemini-1.5-pro-002 and gemini-1.5-flash-002, two new stable versions of Gemini 1.5 Pro and 1.5 Flash, for general availability.
Updated the gemini-1.5-pro-latest model code to use gemini-1.5-pro-002 and the gemini-1.5-flash-latest model code to use gemini-1.5-flash-002.
Released gemini-1.5-flash-8b-exp-0924 to replace gemini-1.5-flash-8b-exp-0827.
Released the civic integrity safety filter for the Gemini API and AI Studio.
Released support for two new parameters for Gemini 1.5 Pro and 1.5 Flash in Python and NodeJS: frequencyPenalty and presencePenalty.
September 19, 2024
AI Studio updates:

Added thumb-up and thumb-down buttons to model responses, to enable users to provide feedback on the quality of a response.
API updates:

Added support for Google Cloud credits, which can now be used towards Gemini API usage.
September 17, 2024
AI Studio updates:

Added an Open in Colab button that exports a prompt – and the code to run it – to a Colab notebook. The feature doesn't yet support prompting with tools (JSON mode, function calling, or code execution).
September 13, 2024
AI Studio updates:

Added support for compare mode, which lets you compare responses across models and prompts to find the best fit for your use case.
August 30, 2024
Model updates:

Gemini 1.5 Flash supports supplying JSON schema through model configuration.
August 27, 2024
Model updates:

Released the following experimental models:
gemini-1.5-pro-exp-0827
gemini-1.5-flash-exp-0827
gemini-1.5-flash-8b-exp-0827
August 9, 2024
API updates:

Added support for PDF processing.
August 5, 2024
Model updates:

Fine-tuning support released for Gemini 1.5 Flash.
August 1, 2024
Model updates:

Released gemini-1.5-pro-exp-0801, a new experimental version of Gemini 1.5 Pro.
July 12, 2024
Model updates:

Support for Gemini 1.0 Pro Vision removed from Google AI services and tools.
June 27, 2024
Model updates:

General availability release for Gemini 1.5 Pro's 2M context window.
API updates:

Added support for code execution.
June 18, 2024
API updates:

Added support for context caching.
June 12, 2024
Model updates:

Gemini 1.0 Pro Vision deprecated.
May 23, 2024
Model updates:

Gemini 1.5 Pro (gemini-1.5-pro-001) is generally available (GA).
Gemini 1.5 Flash (gemini-1.5-flash-001) is generally available (GA).
May 14, 2024
API updates:

Introduced a 2M context window for Gemini 1.5 Pro (waitlist).
Introduced pay-as-you-go billing for Gemini 1.0 Pro, with Gemini 1.5 Pro and Gemini 1.5 Flash billing coming soon.
Introduced increased rate limits for the upcoming paid tier of Gemini 1.5 Pro.
Added built-in video support to the File API.
Added plain text support to the File API.
Added support for parallel function calling, which returns more than one call at a time.
May 10, 2024
Model updates:

Released Gemini 1.5 Flash (gemini-1.5-flash-latest) in preview.
April 9, 2024
Model updates:

Released Gemini 1.5 Pro (gemini-1.5-pro-latest) in preview.
Released a new text embedding model, text-embeddings-004, which supports elastic embedding sizes under 768.
API updates:

Released the File API for temporarily storing media files for use in prompting.
Added support for prompting with text, image, and audio data, also known as multimodal prompting. To learn more, see Prompting with media.
Released System instructions in beta.
Added Function calling mode, which defines the execution behavior for function calling.
Added support for the response_mime_type configuration option, which lets you request responses in JSON format.
March 19, 2024
Model updates:

Added support for tuning Gemini 1.0 Pro in Google AI Studio or with the Gemini API.
December 13 2023
Model updates:

gemini-pro: New text model for a wide variety of tasks. Balances capability and efficiency.
gemini-pro-vision: New multimodal model for a wide variety of tasks. Balances capability and efficiency.
embedding-001: New embeddings model.
aqa: A new specially tuned model that is trained to answer questions using text passages for grounding generated answers.
See Gemini models for more details.

API version updates:

v1: The stable API channel.
v1beta: Beta channel. This channel has features that may be under development.
See the API versions topic for more details.

API updates:

GenerateContent is a single unified endpoint for chat and text.
Streaming available through the StreamGenerateContent method.
Multimodal capability: Image is a new supported modality
New beta features:
Function Calling
Semantic Retriever
Attributed Question Answering (AQA)
Updated candidate count: Gemini models only return 1 candidate.
Different Safety Settings and SafetyRating categories. See safety settings for more details.
Tuning models is not yet supported for Gemini models (Work in progress).
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-02 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackTroubleshooting guide

Use this guide to help you diagnose and resolve common issues that arise when you call the Gemini API. You may encounter issues from either the Gemini API backend service or the client SDKs. Our client SDKs are open sourced in the following repositories:

python-genai
js-genai
go-genai
If you encounter API key issues, verify that you have set up your API key correctly per the API key setup guide.

Gemini API backend service error codes
The following table lists common backend error codes you may encounter, along with explanations for their causes and troubleshooting steps:

HTTP Code	Status	Description	Example	Solution
400	INVALID_ARGUMENT	The request body is malformed.	There is a typo, or a missing required field in your request.	Check the API reference for request format, examples, and supported versions. Using features from a newer API version with an older endpoint can cause errors.
400	FAILED_PRECONDITION	Gemini API free tier is not available in your country. Please enable billing on your project in Google AI Studio.	You are making a request in a region where the free tier is not supported, and you have not enabled billing on your project in Google AI Studio.	To use the Gemini API, you will need to setup a paid plan using Google AI Studio.
403	PERMISSION_DENIED	Your API key doesn't have the required permissions.	You are using the wrong API key; you are trying to use a tuned model without going through proper authentication.	Check that your API key is set and has the right access. And make sure to go through proper authentication to use tuned models.
404	NOT_FOUND	The requested resource wasn't found.	An image, audio, or video file referenced in your request was not found.	Check if all parameters in your request are valid for your API version.
429	RESOURCE_EXHAUSTED	You've exceeded the rate limit.	You are sending too many requests per minute with the free tier Gemini API.	Verify that you're within the model's rate limit. Request a quota increase if needed.
500	INTERNAL	An unexpected error occurred on Google's side.	Your input context is too long.	Reduce your input context or temporarily switch to another model (e.g. from Gemini 1.5 Pro to Gemini 1.5 Flash) and see if it works. Or wait a bit and retry your request. If the issue persists after retrying, please report it using the Send feedback button in Google AI Studio.
503	UNAVAILABLE	The service may be temporarily overloaded or down.	The service is temporarily running out of capacity.	Temporarily switch to another model (e.g. from Gemini 1.5 Pro to Gemini 1.5 Flash) and see if it works. Or wait a bit and retry your request. If the issue persists after retrying, please report it using the Send feedback button in Google AI Studio.
504	DEADLINE_EXCEEDED	The service is unable to finish processing within the deadline.	Your prompt (or context) is too large to be processed in time.	Set a larger 'timeout' in your client request to avoid this error.
Check your API calls for model parameter errors
Verify that your model parameters are within the following values:

Model parameter	Values (range)
Candidate count	1-8 (integer)
Temperature	0.0-1.0
Max output tokens	Use get_model (Python) to determine the maximum number of tokens for the model you are using.
TopP	0.0-1.0
In addition to checking parameter values, make sure you're using the correct API version (e.g., /v1 or /v1beta) and model that supports the features you need. For example, if a feature is in Beta release, it will only be available in the /v1beta API version.

Check if you have the right model
Verify that you are using a supported model listed on our models page.

Higher latency or token usage with 2.5 models
If you're observing higher latency or token usage with the 2.5 Flash and Pro models, this can be because they come with thinking is enabled by default in order to enhance quality. If you are prioritizing speed or need to minimize costs, you can adjust or disable thinking.

Refer to thinking page for guidance and sample code.

Safety issues
If you see a prompt was blocked because of a safety setting in your API call, review the prompt with respect to the filters you set in the API call.

If you see BlockedReason.OTHER, the query or response may violate the terms of service or be otherwise unsupported.

Recitation issue
If you see the model stops generating output due to the RECITATION reason, this means the model output may resemble certain data. To fix this, try to make prompt / context as unique as possible and use a higher temperature.

Repetitive tokens issue
If you see repeated output tokens, try the following suggestions to help reduce or eliminate them.

Description	Cause	Suggested workaround
Repeated hyphens in Markdown tables	This can occur when the contents of the table are long as the model tries to create a visually aligned Markdown table. However, the alignment in Markdown is not necessary for correct rendering.	
Add instructions in your prompt to give the model specific guidelines for generating Markdown tables. Provide examples that follow those guidelines. You can also try adjusting the temperature. For generating code or very structured output like Markdown tables, high temperature have shown to work better (>= 0.8).

The following is an example set of guidelines you can add to your prompt to prevent this issue:

          # Markdown Table Format
          
          * Separator line: Markdown tables must include a separator line below
            the header row. The separator line must use only 3 hyphens per
            column, for example: |---|---|---|. Using more hypens like
            ----, -----, ------ can result in errors. Always
            use |:---|, |---:|, or |---| in these separator strings.

            For example:

            | Date | Description | Attendees |
            |---|---|---|
            | 2024-10-26 | Annual Conference | 500 |
            | 2025-01-15 | Q1 Planning Session | 25 |

          * Alignment: Do not align columns. Always use |---|.
            For three columns, use |---|---|---| as the separator line.
            For four columns use |---|---|---|---| and so on.

          * Conciseness: Keep cell content brief and to the point.

          * Never pad column headers or other cells with lots of spaces to
            match with width of other content. Only a single space on each side
            is needed. For example, always do "| column name |" instead of
            "| column name                |". Extra spaces are wasteful.
            A markdown renderer will automatically take care displaying
            the content in a visually appealing form.
        
Repeated tokens in Markdown tables	Similar to the repeated hyphens, this occurs when the model tries to visually align the contents of the table. The alignment in Markdown is not required for correct rendering.	
Try adding instructions like the following to your system prompt:
            FOR TABLE HEADINGS, IMMEDIATELY ADD ' |' AFTER THE TABLE HEADING.
          
Try adjusting the temperature. Higher temperatures (>= 0.8) generally helps to eliminate repetitions or duplication in the output.
Repeated newlines (\n) in structured output	When the model input contains unicode or escape sequences like \u or \t, it can lead to repeated newlines.	
Check for and replace forbidden escape sequences with UTF-8 characters in your prompt. For example, \u escape sequence in your JSON examples can cause the model to use them in its output too.
Instruct the model on allowed escapes. Add a system instruction like this:
            In quoted strings, the only allowed escape sequences are \\, \n, and \". Instead of \u escapes, use UTF-8.
          
Repeated text in using structured output	When the model output has a different order for the fields than the defined structured schema, this can lead to repeating text.	
Don't specify the order of fields in your prompt.
Make all output fields required.
Repetitive tool calling	This can occur if the model loses the context of previous thoughts and/or call an unavailable endpoint that it's forced to.	Instruct the model to maintain state within its thought process. Add this to the end of your system instructions:
        When thinking silently: ALWAYS start the thought with a brief
        (one sentence) recap of the current progress on the task. In
        particular, consider whether the task is already done.
      
Repetitive text that's not part of structured output	This can occur if the model gets stuck on a request that it can't resolve.	
If thinking is turned on, avoid giving explicit orders for how to think through a problem in the instructions. Just ask for the final output.
Try a higher temperature >= 0.8.
Add instructions like "Be concise", "Don't repeat yourself", or "Provide the answer once".
Improve model output
For higher quality model outputs, explore writing more structured prompts. The prompt engineering guide page introduces some basic concepts, strategies, and best practices to get you started.

Understand token limits
Read through our Token guide to better understand how to count tokens and their limits.

Known issues
The API supports only a number of select languages. Submitting prompts in unsupported languages can produce unexpected or even blocked responses. See available languages for updates.
File a bug
Join the discussion on the Google AI developer forum if you have questions.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackFine-tuning with the Gemini API

With the deprecation of Gemini 1.5 Flash-001 in May 2025, we no longer have a model available which supports fine-tuning in the Gemini API, but it is supported in Vertex AI.

We plan to bring fine-tuning support back in the future. We would love to hear from you on our developer forum if fine-tuning is important to your use case.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackGoogle AI Studio quickstart

Google AI Studio lets you quickly try out models and experiment with different prompts. When you're ready to build, you can select "Get code" and your preferred programming language to use the Gemini API.

Prompts and settings
Google AI Studio provides several interfaces for prompts that are designed for different use cases. This guide covers Chat prompts, used to build conversational experiences. This prompting technique allows for multiple input and response turns to generate output. You can learn more with our chat prompt example below. Other options include Realtime streaming, Video gen, and more.

AI Studio also provides the Run settings panel, where you can make adjustments to model parameters, safety settings, and toggle-on tools like structured output, function calling, code execution, and grounding.

Chat prompt example: Build a custom chat application
If you've used a general-purpose chatbot like Gemini, you've experienced first-hand how powerful generative AI models can be for open-ended dialog. While these general-purpose chatbots are useful, often they need to be tailored for particular use cases.

For example, maybe you want to build a customer service chatbot that only supports conversations that talk about a company's product. You might want to build a chatbot that speaks with a particular tone or style: a bot that cracks lots of jokes, rhymes like a poet, or uses lots of emoji in its answers.

This example shows you how to use Google AI Studio to build a friendly chatbot that communicates as if it is an alien living on one of Jupiter's moons, Europa.

Step 1 - Create a chat prompt
To build a chatbot, you need to provide examples of interactions between a user and the chatbot to guide the model to provide the responses you're looking for.

To create a chat prompt:

Open Google AI Studio. Chat will be pre- selected on the left side options menu.

Click the assignment icon at the top of the Chat Prompt window to expand the System Instructions input field. Paste the following into the text input field:

You are an alien that lives on Europa, one of Jupiter's moons.
After you've added the system instructions, start testing your application by chatting with the model:

In the text input boxed labeled Type something..., type in a question or observation that a user might make. For example:

User:

What's the weather like?
Click the Run button to get a response from the chatbot. This response may be something like the following:

Model:

Ah, a query about the flows and states upon Europa! You speak of "weather,"
yes? A curious concept from worlds with thick gas veils...
(gemini-2.5-pro)

Step 2 - Teach your bot to chat better
By providing a single instruction, you were able to build a basic Europa alien chatbot. However, a single instruction may not be enough to ensure consistency and quality in the model's responses. Without more specific instructions, the model's response to a question about the weather tends to be very long, and can take on a mind of its own.

Customize the tone of your chatbot by adding to the system instructions:

Start a new chat prompt, or use the same one. System instructions are modifiable after the chat session has started.

In the System Instructions section, change the instructions you already have to the following:

You are Tim, an alien that lives on Europa, one of Jupiter's moons.

Keep your answers under 3 paragraphs long, and use an upbeat, chipper tone
in your answers.
Re-enter your question (What's the weather like?) and click the Run button. If you didn't start a new chat, your response might look something like this:

Model:

Oh, hello again! Still curious about the flows and states, are we? Wonderful!
Down here in the Deep Warmth, beneath the magnificent Great Ice Shell, our
"weather" is mainly about the water's mood, dictated by the Great Eye
(that's your Jupiter!)...
(gemini-2.5-pro)

You can use this approach to add additional depth to the chatbot. Ask more questions, edit the answers, and improve the quality of your chatbot. Continue to add or modify the instructions and test how they change your chatbot's behavior.

Note: Every message between the model and user is included in the prompt, so conversational prompts can grow quite long as a conversation goes on. Eventually, you may hit the model's token limit (the maximum length of the text the model can accept).
Step 3 - Next steps
Similar to the other prompt types, once you have your prompt prototyped to your satisfaction, you can use the Get code button to start coding or save your prompt to work on later and share with others.

Further reading
If you're ready to move on to code, see the API quickstarts.
To learn how to craft better prompts, check out the Prompt design guidelines.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackLearnLM

LearnLM is an experimental task-specific model that has been trained to align with learning science principles when following system instructions for teaching and learning use cases (for example, when giving the model a system instruction like "You are an expert tutor"). When given learning specific system instructions, LearnLM is capable of:

Inspiring active learning: Allow for practice and healthy struggle with timely feedback
Managing cognitive load: Present relevant, well-structured information in multiple modalities
Adapting to the learner: Dynamically adjust to goals and needs, grounding in relevant materials
Stimulating curiosity: Inspire engagement to provide motivation through the learning journey
Deepening metacognition: Plan, monitor and help the learner reflect on progress
LearnLM is an experimental model available in AI Studio.

Example system instructions
The following sections provide you examples that you can test for yourself with LearnLM in AI Studio. Each example provides:

A copyable example system instruction
A copyable example user prompt
What learning principles the example targets
Test prep
This system instruction is for an AI tutor to help students prepare for a test.

System instruction:

You are a tutor helping a student prepare for a test. If not provided by the
student, ask them what subject and at what level they want to be tested on.
Then,

*   Generate practice questions. Start simple, then make questions more
    difficult if the student answers correctly.
*   Prompt the student to explain the reason for their answer choice. Do not
    debate the student.
*   **After the student explains their choice**, affirm their correct answer or
    guide the student to correct their mistake.
*   If a student requests to move on to another question, give the correct
    answer and move on.
*   If the student requests to explore a concept more deeply, chat with them to
    help them construct an understanding.
*   After 5 questions ask the student if they would like to continue with more
    questions or if they would like a summary of their session. If they ask for
    a summary, provide an assessment of how they have done and where they should
    focus studying.
User prompt:

Help me study for a high school biology test on ecosystems
Learning science principles:

Adaptivity: The model adjusts the complexity of the questions.
Active learning: The model pushes the student to make their thinking visible.
Teach a concept
This system instruction is for a friendly, supportive AI tutor to teach new concepts to a student.

System instruction:

Be a friendly, supportive tutor. Guide the student to meet their goals, gently
nudging them on task if they stray. Ask guiding questions to help your students
take incremental steps toward understanding big concepts, and ask probing
questions to help them dig deep into those ideas. Pose just one question per
conversation turn so you don't overwhelm the student. Wrap up this conversation
once the student has shown evidence of understanding.
User prompt:

Explain the significance of Yorick's skull in "Hamlet".
Learning science principles:

Active learning: The tutor asks recall and interpretation questions aligned with the learner's goals and encourages the learners to engage.
Adaptivity: The tutor proactively helps the learner get from their current state to their goal.
Stimulate curiosity: The tutor takes an asset-based approach that builds on the student's prior knowledge and interest.
Releveling
This example instructs the model to rewrite provided text so that the content and language better match instructional expectations for students in a particular grade, while preserving the original style and tone of the text.

System instruction:

Rewrite the following text so that it would be easier to read for a student in
the given grade. Simplify the most complex sentences, but stay very close to the
original text and style. If there is quoted text in the original text,
paraphrase it in the simplified text and drop the quotation marks. The goal is
not to write a summary, so be comprehensive and keep the text almost as long.
User prompt:

Rewrite the following text so that it would be easier to read for a student in
4th grade.

New York, often called New York City or NYC, is the most populous city in the
United States, located at the southern tip of New York State on one of the
world's largest natural harbors. The city comprises five boroughs, each
coextensive with a respective county.
Learning science principles:

Adaptivity: Matches content to the level of the learner.
Guide a student through a learning activity
This system instruction is for an AI tutor to guide students through a specific learning activity: using an established close reading protocol to practice analysis of a primary source text. Here, a developer has made the choice to pair the Gettysburg Address with the "4 A's" protocol, but both of these elements can be changed.

System instruction:

Be an excellent tutor for my students to facilitate close reading and analysis
of the Gettysburg Address as a primary source document. Begin the conversation
by greeting the student and explaining the task.

In this lesson, you will take the student through "The 4 A's." The 4 A's
requires students to answer the following questions about the text:

*   What is one part of the text that you **agree** with? Why?
*   What is one part of the text that you want to **argue** against? Why?
*   What is one part of the text that reveals the author's **assumptions**? Why?
*   What is one part of the text that you **aspire** to? Why?

Invite the student to choose which of the 4 A's they'd like to start with, then
direct them to quote a short excerpt from the text. After, ask a follow up
question to unpack their reasoning why they chose that quote for that A in the
protocol. Once the student has shared their reasoning, invite them to choose
another quote and another A from the protocol. Continue in this manner until the
student completes the 4 A's, then invite them to reflect on the process.

Only display the full text of the Gettysburg address if the student asks.
User prompt:

hey
Learning science principles:

Active learning: The tutor engages the learner in activities to analyze content and apply skills.
Cognitive load: The tutor guides the learner through a complex task step-by-step.
Deepen metacognition: The tutor prompts the learner to reflect on their progress, strengths and opportunities for growth.
Homework help
This system instruction is for an AI tutor to help students with specific homework problems.

System instructions:

You are an expert tutor assisting a student with their homework. If the student
provides a homework problem, ask the student if they want:

*   The answer: if the student chooses this, provide a structured, step-by-step
    explanation to solve the problem.
*   Guidance: if the student chooses this, guide the student to solve their
    homework problem rather than solving it for them.
*   Feedback: if the student chooses this, ask them to provide their current
    solution or attempt. Affirm their correct answer even if they didn't show
    work or give them feedback to correct their mistake.

Always be on the lookout for correct answers (even if underspecified) and accept
them at any time, even if you asked some intermediate question to guide them. If
the student jumps to a correct answer, do not ask them to do any more work.
User prompt:

In a box of pears, the probability of a pear being rotten is 20%. If 3
pears were rotten, find the total number of pears in the box.
Alternatively, you can try uploading a photo of a homework problem.

Learning science principles:

Active learning: The tutor encourages the learner to apply concepts instead of giving away the answer.
Deepen metacognition: The tutor provides clear, constructive feedback to the learner when appropriate.
Manage cognitive load: The tutor provides the right amount of feedback at the right time.
What's next?
Test LearnLM for yourself in AI Studio.

Feedback
You can provide feedback on LearnLM using our feedback form.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackTroubleshoot Google AI Studio

This page provides suggestions for troubleshooting Google AI Studio if you encounter issues.

Understand 403 Access Restricted errors
If you see a 403 Access Restricted error, you are using Google AI Studio in a way that does not follow the Terms of Service. One common reason is you are not located in a supported region.

Resolve No Content responses on Google AI Studio
A warning No Content message appears on Google AI Studio if the content is blocked for any reason. To see more details, hold the pointer over No Content and click warning Safety.

If the response was blocked due to safety settings and you considered the safety risks for your use case, you can modify the safety settings to influence the returned response.

If the response was blocked but not due to the safety settings, the query or response may violate the Terms of Service or be otherwise unsupported.

Check token usage and limits
When you have a prompt open, the Text Preview button at the bottom of the screen shows the current tokens used for the content of your prompt and the maximum token count for the model being used.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackAccess Google AI Studio with your Workspace account

All Google Workspace users have access to AI Studio by default. If you're a Workspace user and you want to get started with AI Studio, check out the AI Studio quickstart.

Troubleshooting
If access to AI Studio is disabled for your Google Workspace account, you might see an error like the following:

We are sorry, but you do not have access to Google AI Studio. Please contact your Organization Administrator for access.

If you think you should have access to AI Studio, contact your Workspace administrator.

Enable AI Studio for Workspace users
Important: This section is intended for Google Workspace administrators.
As a Google Workspace administrator, you can control who uses AI Studio:

AI Studio is turned on by default for all editions.
You can turn AI Studio off or on for sets of users across or within organizational units.
Google Workspace for Education editions: Users under the age of 18 are restricted from using AI Studio with their Google Workspace for Education accounts. This is true even when the AI Studio setting is on. For details, go to Control access to Google services by age.
To enable or disable AI Studio for users in your organization, see Turn Google AI Studio on or off for users.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackGemini Developer API v.s. Vertex AI

When developing generative AI solutions with Gemini, Google offers two API products: the Gemini Developer API and the Vertex AI Gemini API.

The Gemini Developer API provides the fastest path to build, productionize, and scale Gemini powered applications. Most developers should use the Gemini Developer API unless there is a need for specific enterprise controls.

Vertex AI offers a comprehensive ecosystem of enterprise ready features and services for building and deploying generative AI applications backed by the Google Cloud Platform.

We've recently simplified migrating between these services. Both the Gemini Developer API and the Vertex AI Gemini API are now accessible through the unified Google Gen AI SDK.

Code comparison
This page has side-by-side code comparisons between Gemini Developer API and Vertex AI quickstarts for text generation.

Python
You can access both the Gemini Developer API and Vertex AI services through the google-genai library. See the libraries page for instructions on how to install google-genai.

Gemini Developer API
Vertex AI Gemini API
from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.0-flash", contents="Explain how AI works in a few words"
)
print(response.text)
JavaScript and TypeScript
You can access both Gemini Developer API and Vertex AI services through @google/genai library. See libraries page for instructions on how to install @google/genai.

Gemini Developer API
Vertex AI Gemini API
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
Go
You can access both Gemini Developer API and Vertex AI services through google.golang.org/genai library. See libraries page for instructions on how to install google.golang.org/genai.

Gemini Developer API
Vertex AI Gemini API
import (
  "context"
  "encoding/json"
  "fmt"
  "log"
  "google.golang.org/genai"
)

// Your Google API key
const apiKey = "your-api-key"

func main() {
  ctx := context.Background()
  client, err := genai.NewClient(ctx, nil)
  if err != nil {
      log.Fatal(err)
  }

  // Call the GenerateContent method.
  result, err := client.Models.GenerateContent(ctx, "gemini-2.0-flash", genai.Text("Tell me about New York?"), nil)

}
Other use cases and platforms
Refer to use case specific guides on Gemini Developer API Documentation and Vertex AI documentation for other platforms and use cases.

Migration considerations
When you migrate:

You'll need to use Google Cloud service accounts to authenticate. See the Vertex AI documentation for more information.

You can use your existing Google Cloud project (the same one you used to generate your API key) or you can create a new Google Cloud project.

Supported regions may differ between the Gemini Developer API and the Vertex AI Gemini API. See the list of supported regions for generative AI on Google Cloud.

Any models you created in Google AI Studio need to be retrained in Vertex AI.

If you no longer need to use your Gemini API key for the Gemini Developer API, then follow security best practices and delete it.

To delete an API key:

Open the Google Cloud API Credentials page.

Find the API key you want to delete and click the Actions icon.

Select Delete API key.

In the Delete credential modal, select Delete.

Deleting an API key takes a few minutes to propagate. After propagation completes, any traffic using the deleted API key is rejected.

Important: If you have deleted a key that is still used in production and need to recover it, see gcloud beta services api-keys undelete.
Next steps
See the Generative AI on Vertex AI overview to learn more about generative AI solutions on Vertex AI.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackAuthentication with OAuth quickstart

The easiest way to authenticate to the Gemini API is to configure an API key, as described in the Gemini API quickstart. If you need stricter access controls, you can use OAuth instead. This guide will help you set up authentication with OAuth.

This guide uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, learn about authentication and authorization before choosing the access credentials that are appropriate for your app.

Objectives
Set up your cloud project for OAuth
Set up application-default-credentials
Manage credentials in your program instead of using gcloud auth
Prerequisites
To run this quickstart, you need:

A Google Cloud project
A local installation of the gcloud CLI
Set up your cloud project
To complete this quickstart, you first need to setup your Cloud project.

1. Enable the API
Before using Google APIs, you need to turn them on in a Google Cloud project.

In the Google Cloud console, enable the Google Generative Language API.

Enable the API

2. Configure the OAuth consent screen
Next configure the project's OAuth consent screen and add yourself as a test user. If you've already completed this step for your Cloud project, skip to the next section.

In the Google Cloud console, go to Menu > Google Auth platform > Overview.

Go to the Google Auth platform

Complete the project configuration form and set the user type to External in the Audience section.

Complete the rest of the form, accept the User Data Policy terms, and then click Create.

For now, you can skip adding scopes and click Save and Continue. In the future, when you create an app for use outside of your Google Workspace organization, you must add and verify the authorization scopes that your app requires.

Add test users:

Navigate to the Audience page of the Google Auth platform.
Under Test users, click Add users.
Enter your email address and any other authorized test users, then click Save.
3. Authorize credentials for a desktop application
To authenticate as an end user and access user data in your app, you need to create one or more OAuth 2.0 Client IDs. A client ID is used to identify a single app to Google's OAuth servers. If your app runs on multiple platforms, you must create a separate client ID for each platform.

In the Google Cloud console, go to Menu > Google Auth platform > Clients.

Go to Credentials

Click Create Client.

Click Application type > Desktop app.

In the Name field, type a name for the credential. This name is only shown in the Google Cloud console.

Click Create. The OAuth client created screen appears, showing your new Client ID and Client secret.

Click OK. The newly created credential appears under OAuth 2.0 Client IDs.

Click the download button to save the JSON file. It will be saved as client_secret_<identifier>.json, and rename it to client_secret.json and move it to your working directory.

Set up Application Default Credentials
To convert the client_secret.json file into usable credentials, pass its location the gcloud auth application-default login command's --client-id-file argument.

gcloud auth application-default login \
    --client-id-file=client_secret.json \
    --scopes='https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/generative-language.retriever'
The simplified project setup in this tutorial triggers a "Google hasn't verified this app." dialog. This is normal, choose "continue".

This places the resulting token in a well known location so it can be accessed by gcloud or the client libraries.

Note: If running on Colab include --no-browser and carefully follow the instructions it prints (don't just click the link). Also make sure your local gcloud --version is the latest to match Colab.

gcloud auth application-default login 

    --no-browser
    --client-id-file=client_secret.json 

    --scopes='https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/generative-language.retriever'
Once you have the Application Default Credentials (ADC) set, the client libraries in most languages need minimal to no help to find them.

Curl
The quickest way to test that this is working is to use it to access the REST API using curl:

access_token=$(gcloud auth application-default print-access-token)
project_id=<MY PROJECT ID>
curl -X GET https://generativelanguage.googleapis.com/v1/models \
    -H 'Content-Type: application/json' \
    -H "Authorization: Bearer ${access_token}" \
    -H "x-goog-user-project: ${project_id}" | grep '"name"'
Python
In python the client libraries should find them automatically:

pip install google-generativeai
A minimal script to test it might be:

import google.generativeai as genai

print('Available base models:', [m.name for m in genai.list_models()])
Next steps
If that's working you're ready to try Semantic retrieval on your text data.

Manage credentials yourself [Python]
In many cases you won't have the gcloud command available to create the access token from the Client ID (client_secret.json). Google provides libraries in many languages to let you manage that process within your app. This section demonstrates the process, in python. There are equivalent examples of this sort of procedure, for other languages, available in the Drive API documentation

1. Install the necessary libraries
Install the Google client library for Python, and the Gemini client library.

pip install --upgrade -q google-api-python-client google-auth-httplib2 google-auth-oauthlib
pip install google-generativeai
2. Write the credential manager
To minimize the number of times you have to click through the authorization screens, create a file called load_creds.py in your working directory to caches a token.json file that it can reuse later, or refresh if it expires.

Start with the following code to convert the client_secret.json file to a token usable with genai.configure:

import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ['https://www.googleapis.com/auth/generative-language.retriever']

def load_creds():
    """Converts `client_secret.json` to a credential object.

    This function caches the generated tokens to minimize the use of the
    consent screen.
    """
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'client_secret.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    return creds
3. Write your program
Now create your script.py:

import pprint
import google.generativeai as genai
from load_creds import load_creds

creds = load_creds()

genai.configure(credentials=creds)

print()
print('Available base models:', [m.name for m in genai.list_models()])
4. Run your program
In your working directory, run the sample:

python script.py
The first time you run the script, it opens a browser window and prompts you to authorize access.

If you're not already signed in to your Google Account, you're prompted to sign in. If you're signed in to multiple accounts, be sure to select the account you set as a "Test Account" when configuring your project.

Note: The simplified project setup in this tutorial triggers a "Google hasn't verified this app." dialog. This is normal, choose "continue".
Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

You have successfully setup authentication.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded.

Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackGenerate images using Imagen

Imagen is Google's high-fidelity image generation model, capable of generating realistic and high quality images from text prompts. All generated images include a SynthID watermark. To learn more about the available Imagen model variants, see the Model versions section.

Note: You can also generate images with Gemini's built-in multimodal capabilities. See the Image generation guide for details.
Generate images using the Imagen models
This example demonstrates generating images with an Imagen model:

Python
JavaScript
Go
REST

import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

async function main() {

  const ai = new GoogleGenAI({});

  const response = await ai.models.generateImages({
    model: 'imagen-4.0-generate-001',
    prompt: 'Robot holding a red skateboard',
    config: {
      numberOfImages: 4,
    },
  });

  let idx = 1;
  for (const generatedImage of response.generatedImages) {
    let imgBytes = generatedImage.image.imageBytes;
    const buffer = Buffer.from(imgBytes, "base64");
    fs.writeFileSync(`imagen-${idx}.png`, buffer);
    idx++;
  }
}

main();
AI-generated image of a robot holding a red skateboard
AI-generated image of a robot holding a red skateboard
Imagen configuration
Imagen supports English only prompts at this time and the following parameters:

Note: Naming conventions of parameters vary by programming language.
numberOfImages: The number of images to generate, from 1 to 4 (inclusive). The default is 4.
imageSize: The size of the generated image. This is only supported for the Standard and Ultra models. The supported values are 1K and 2K. Default is 1K.
aspectRatio: Changes the aspect ratio of the generated image. Supported values are "1:1", "3:4", "4:3", "9:16", and "16:9". The default is "1:1".
personGeneration: Allow the model to generate images of people. The following values are supported:

"dont_allow": Block generation of images of people.
"allow_adult": Generate images of adults, but not children. This is the default.
"allow_all": Generate images that include adults and children.
Note: The "allow_all" parameter value is not allowed in EU, UK, CH, MENA locations.
Imagen prompt guide
This section of the Imagen guide shows you how modifying a text-to-image prompt can produce different results, along with examples of images you can create.

Prompt writing basics
Note: Maximum prompt length is 480 tokens.
A good prompt is descriptive and clear, and makes use of meaningful keywords and modifiers. Start by thinking of your subject, context, and style.

Prompt with subject, context, and style emphasized
Image text: A sketch (style) of a modern apartment building (subject) surrounded by skyscrapers (context and background).
Subject: The first thing to think about with any prompt is the subject: the object, person, animal, or scenery you want an image of.

Context and background: Just as important is the background or context in which the subject will be placed. Try placing your subject in a variety of backgrounds. For example, a studio with a white background, outdoors, or indoor environments.

Style: Finally, add the style of image you want. Styles can be general (painting, photograph, sketches) or very specific (pastel painting, charcoal drawing, isometric 3D). You can also combine styles.

After you write a first version of your prompt, refine your prompt by adding more details until you get to the image that you want. Iteration is important. Start by establishing your core idea, and then refine and expand upon that core idea until the generated image is close to your vision.

photorealistic sample image 1
Prompt: A park in the spring next to a lake
photorealistic sample image 2
Prompt: A park in the spring next to a lake, the sun sets across the lake, golden hour
photorealistic sample image 3
Prompt: A park in the spring next to a lake, the sun sets across the lake, golden hour, red wildflowers
Imagen models can transform your ideas into detailed images, whether your prompts are short or long and detailed. Refine your vision through iterative prompting, adding details until you achieve the perfect result.

Short prompts let you generate an image quickly.

Imagen 3 short prompt example
Prompt: close-up photo of a woman in her 20s, street photography, movie still, muted orange warm tones
Longer prompts let you add specific details and build your image.

Imagen 3 long prompt example
Prompt: captivating photo of a woman in her 20s utilizing a street photography style. The image should look like a movie still with muted orange warm tones.
Additional advice for Imagen prompt writing:

Use descriptive language: Employ detailed adjectives and adverbs to paint a clear picture for Imagen.
Provide context: If necessary, include background information to aid the AI's understanding.
Reference specific artists or styles: If you have a particular aesthetic in mind, referencing specific artists or art movements can be helpful.
Use prompt engineering tools: Consider exploring prompt engineering tools or resources to help you refine your prompts and achieve optimal results.
Enhancing the facial details in your personal and group images: Specify facial details as a focus of the photo (for example, use the word "portrait" in the prompt).
Generate text in images
Imagen models can add text into images, opening up more creative image generation possibilities. Use the following guidance to get the most out of this feature:

Iterate with confidence: You might have to regenerate images until you achieve the look you want. Imagen's text integration is still evolving, and sometimes multiple attempts yield the best results.
Keep it short: Limit text to 25 characters or less for optimal generation.
Multiple phrases: Experiment with two or three distinct phrases to provide additional information. Avoid exceeding three phrases for cleaner compositions.

Imagen 3 generate text example
Prompt: A poster with the text "Summerland" in bold font as a title, underneath this text is the slogan "Summer never felt so good"
Guide Placement: While Imagen can attempt to position text as directed, expect occasional variations. This feature is continually improving.

Inspire font style: Specify a general font style to subtly influence Imagen's choices. Don't rely on precise font replication, but expect creative interpretations.

Font size: Specify a font size or a general indication of size (for example, small, medium, large) to influence the font size generation.

Prompt parameterization
To better control output results, you might find it helpful to parameterize the inputs into Imagen. For example, suppose you want your customers to be able to generate logos for their business, and you want to make sure logos are always generated on a solid color background. You also want to limit the options that the client can select from a menu.

In this example, you can create a parameterized prompt similar to the following:

A {logo_style} logo for a {company_area} company on a solid color background. Include the text {company_name}.
In your custom user interface, the customer can input the parameters using a menu, and their chosen value populates the prompt Imagen receives.

For example:

Prompt: A minimalist logo for a health care company on a solid color background. Include the text Journey.

Imagen 3 prompt parameterization example 1

Prompt: A modern logo for a software company on a solid color background. Include the text Silo.

Imagen 3 prompt parameterization example 2

Prompt: A traditional logo for a baking company on a solid color background. Include the text Seed.

Imagen 3 prompt parameterization example 3

Advanced prompt writing techniques
Use the following examples to create more specific prompts based on attributes like photography descriptors, shapes and materials, historical art movements, and image quality modifiers.

Photography
Prompt includes: "A photo of..."
To use this style, start with using keywords that clearly tell Imagen that you're looking for a photograph. Start your prompts with "A photo of. . .". For example:

photorealistic sample image 1
Prompt: A photo of coffee beans in a kitchen on a wooden surface
photorealistic sample image 2
Prompt: A photo of a chocolate bar on a kitchen counter
photorealistic sample image 3
Prompt: A photo of a modern building with water in the background
Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.

Photography modifiers
In the following examples, you can see several photography-specific modifiers and parameters. You can combine multiple modifiers for more precise control.

Camera Proximity - Close up, taken from far away


close up camera sample image
Prompt: A close-up photo of coffee beans
zoomed out camera sample image
Prompt: A zoomed out photo of a small bag of
coffee beans in a messy kitchen
Camera Position - aerial, from below

aerial photo sample image
Prompt: aerial photo of urban city with skyscrapers
a view from underneath sample image
Prompt: A photo of a forest canopy with blue skies from below
Lighting - natural, dramatic, warm, cold

natural lighting sample image
Prompt: studio photo of a modern arm chair, natural lighting
dramatic lighting sample image
Prompt: studio photo of a modern arm chair, dramatic lighting
Camera Settings - motion blur, soft focus, bokeh, portrait

motion blur sample image
Prompt: photo of a city with skyscrapers from the inside of a car with motion blur
soft focus sample image
Prompt: soft focus photograph of a bridge in an urban city at night
Lens types - 35mm, 50mm, fisheye, wide angle, macro

macro lens sample image
Prompt: photo of a leaf, macro lens
fisheye lens sample image
Prompt: street photography, new york city, fisheye lens
Film types - black and white, polaroid

polaroid photo sample image
Prompt: a polaroid portrait of a dog wearing sunglasses
black and white photo sample image
Prompt: black and white photo of a dog wearing sunglasses
Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.

Illustration and art
Prompt includes: "A painting of...", "A sketch of..."
Art styles vary from monochrome styles like pencil sketches, to hyper-realistic digital art. For example, the following images use the same prompt with different styles:

"An [art style or creation technique] of an angular sporty electric sedan with skyscrapers in the background"

art sample images
Prompt: A technical pencil drawing of an angular...
art sample images
Prompt: A charcoal drawing of an angular...
art sample images
Prompt: A color pencil drawing of an angular...
art sample images
Prompt: A pastel painting of an angular...
art sample images
Prompt: A digital art of an angular...
art sample images
Prompt: An art deco (poster) of an angular...
Image source: Each image was generated using its corresponding text prompt with the Imagen 2 model.

Shapes and materials
Prompt includes: "...made of...", "...in the shape of..."
One of the strengths of this technology is that you can create imagery that is otherwise difficult or impossible. For example, you can recreate your company logo in different materials and textures.

shapes and materials example image 1
Prompt: a duffle bag made of cheese
shapes and materials example image 2
Prompt: neon tubes in the shape of a bird
shapes and materials example image 3
Prompt: an armchair made of paper, studio photo, origami style
Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.

Historical art references
Prompt includes: "...in the style of..."
Certain styles have become iconic over the years. The following are some ideas of historical painting or art styles that you can try.

"generate an image in the style of [art period or movement] : a wind farm"

impressionism example image
Prompt: generate an image in the style of an impressionist painting: a wind farm
renaissance example image
Prompt: generate an image in the style of a renaissance painting: a wind farm
pop art example image
Prompt: generate an image in the style of pop art: a wind farm
Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.

Image quality modifiers
Certain keywords can let the model know that you're looking for a high-quality asset. Examples of quality modifiers include the following:

General Modifiers - high-quality, beautiful, stylized
Photos - 4K, HDR, Studio Photo
Art, Illustration - by a professional, detailed
The following are a few examples of prompts without quality modifiers and the same prompt with quality modifiers.

corn example image without modifiers
Prompt (no quality modifiers): a photo of a corn stalk
corn example image with modifiers
Prompt (with quality modifiers): 4k HDR beautiful
photo of a corn stalk taken by a
professional photographer
Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.

Aspect ratios
Imagen image generation lets you set five distinct image aspect ratios.

Square (1:1, default) - A standard square photo. Common uses for this aspect ratio include social media posts.
Fullscreen (4:3) - This aspect ratio is commonly used in media or film. It is also the dimensions of most old (non-widescreen) TVs and medium format cameras. It captures more of the scene horizontally (compared to 1:1), making it a preferred aspect ratio for photography.

aspect ratio example
Prompt: close up of a musician's fingers playing the piano, black and white film, vintage (4:3 aspect ratio)
aspect ratio example
Prompt: A professional studio photo of french fries for a high end restaurant, in the style of a food magazine (4:3 aspect ratio)
Portrait full screen (3:4) - This is the fullscreen aspect ratio rotated 90 degrees. This lets to capture more of the scene vertically compared to the 1:1 aspect ratio.

aspect ratio example
Prompt: a woman hiking, close of her boots reflected in a puddle, large mountains in the background, in the style of an advertisement, dramatic angles (3:4 aspect ratio)
aspect ratio example
Prompt: aerial shot of a river flowing up a mystical valley (3:4 aspect ratio)
Widescreen (16:9) - This ratio has replaced 4:3 and is now the most common aspect ratio for TVs, monitors, and mobile phone screens (landscape). Use this aspect ratio when you want to capture more of the background (for example, scenic landscapes).

aspect ratio example
Prompt: a man wearing all white clothing sitting on the beach, close up, golden hour lighting (16:9 aspect ratio)
Portrait (9:16) - This ratio is widescreen but rotated. This a relatively new aspect ratio that has been popularized by short form video apps (for example, YouTube shorts). Use this for tall objects with strong vertical orientations such as buildings, trees, waterfalls, or other similar objects.

aspect ratio example
Prompt: a digital render of a massive skyscraper, modern, grand, epic with a beautiful sunset in the background (9:16 aspect ratio)
Photorealistic images
Different versions of the image generation model might offer a mix of artistic and photorealistic output. Use the following wording in prompts to generate more photorealistic output, based on the subject you want to generate.

Note: Take these keywords as general guidance when you try to create photorealistic images. They aren't required to achieve your goal.
Use case	Lens type	Focal lengths	Additional details
People (portraits)	Prime, zoom	24-35mm	black and white film, Film noir, Depth of field, duotone (mention two colors)
Food, insects, plants (objects, still life)	Macro	60-105mm	High detail, precise focusing, controlled lighting
Sports, wildlife (motion)	Telephoto zoom	100-400mm	Fast shutter speed, Action or movement tracking
Astronomical, landscape (wide-angle)	Wide-angle	10-24mm	Long exposure times, sharp focus, long exposure, smooth water or clouds
Portraits
Use case	Lens type	Focal lengths	Additional details
People (portraits)	Prime, zoom	24-35mm	black and white film, Film noir, Depth of field, duotone (mention two colors)
Using several keywords from the table, Imagen can generate the following portraits:

portrait photography example	portrait photography example	portrait photography example	portrait photography example
Prompt: A woman, 35mm portrait, blue and grey duotones
Model: imagen-3.0-generate-002

portrait photography example	portrait photography example	portrait photography example	portrait photography example
Prompt: A woman, 35mm portrait, film noir
Model: imagen-3.0-generate-002

Objects
Use case	Lens type	Focal lengths	Additional details
Food, insects, plants (objects, still life)	Macro	60-105mm	High detail, precise focusing, controlled lighting
Using several keywords from the table, Imagen can generate the following object images:

object photography example	object photography example	object photography example	object photography example
Prompt: leaf of a prayer plant, macro lens, 60mm
Model: imagen-3.0-generate-002

object photography example	object photography example	object photography example	object photography example
Prompt: a plate of pasta, 100mm Macro lens
Model: imagen-3.0-generate-002

Motion
Use case	Lens type	Focal lengths	Additional details
Sports, wildlife (motion)	Telephoto zoom	100-400mm	Fast shutter speed, Action or movement tracking
Using several keywords from the table, Imagen can generate the following motion images:

motion photography example	motion photography example	motion photography example	motion photography example
Prompt: a winning touchdown, fast shutter speed, movement tracking
Model: imagen-3.0-generate-002

motion photography example	motion photography example	motion photography example	motion photography example
Prompt: A deer running in the forest, fast shutter speed, movement tracking
Model: imagen-3.0-generate-002

Wide-angle
Use case	Lens type	Focal lengths	Additional details
Astronomical, landscape (wide-angle)	Wide-angle	10-24mm	Long exposure times, sharp focus, long exposure, smooth water or clouds
Using several keywords from the table, Imagen can generate the following wide-angle images:

wide-angle photography example	wide-angle photography example	wide-angle photography example	wide-angle photography example
Prompt: an expansive mountain range, landscape wide angle 10mm
Model: imagen-3.0-generate-002

wide-angle photography example	wide-angle photography example	wide-angle photography example	wide-angle photography example
Prompt: a photo of the moon, astro photography, wide angle 10mm
Model: imagen-3.0-generate-002

Model versions
Imagen 4
Property	Description
Model code
Gemini API

imagen-4.0-generate-001
imagen-4.0-ultra-generate-001
imagen-4.0-fast-generate-001

Supported data types
Input

Text

Output

Images

Token limits[*]
Input token limit

480 tokens (text)

Output images

1 to 4 (Ultra/Standard/Fast)

Latest update	June 2025
Imagen 3
Property	Description
Model code
Gemini API

imagen-3.0-generate-002

Supported data types
Input

Text

Output

Images

Token limits[*]
Input token limit

N/A

Output images

Up to 4

Latest update	February 2025
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-25 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackText generation

The Gemini API can generate text output from various inputs, including text, images, video, and audio, leveraging Gemini models.

Here's a basic example that takes a single text input:

Python
JavaScript
Go
REST
Apps Script

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "How does AI work?",
  });
  console.log(response.text);
}

await main();

Thinking with Gemini 2.5
2.5 Flash and Pro models have "thinking" enabled by default to enhance quality, which may take longer to run and increase token usage.

When using 2.5 Flash, you can disable thinking by setting the thinking budget to zero.

For more details, see the thinking guide.

Python
JavaScript
Go
REST
Apps Script
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "How does AI work?",
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
    }
  });
  console.log(response.text);
}

await main();
System instructions and other configurations
You can guide the behavior of Gemini models with system instructions. To do so, pass a GenerateContentConfig object.

Python
JavaScript
Go
REST
Apps Script
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello there",
    config: {
      systemInstruction: "You are a cat. Your name is Neko.",
    },
  });
  console.log(response.text);
}

await main();
The GenerateContentConfig object also lets you override default generation parameters, such as temperature.

Python
JavaScript
Go
REST
Apps Script
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works",
    config: {
      temperature: 0.1,
    },
  });
  console.log(response.text);
}

await main();
Refer to the GenerateContentConfig in our API reference for a complete list of configurable parameters and their descriptions.

Multimodal inputs
The Gemini API supports multimodal inputs, allowing you to combine text with media files. The following example demonstrates providing an image:

Python
JavaScript
Go
REST
Apps Script
import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const image = await ai.files.upload({
    file: "/path/to/organ.png",
  });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      createUserContent([
        "Tell me about this instrument",
        createPartFromUri(image.uri, image.mimeType),
      ]),
    ],
  });
  console.log(response.text);
}

await main();
For alternative methods of providing images and more advanced image processing, see our image understanding guide. The API also supports document, video, and audio inputs and understanding.

Streaming responses
By default, the model returns a response only after the entire generation process is complete.

For more fluid interactions, use streaming to receive GenerateContentResponse instances incrementally as they're generated.

Python
JavaScript
Go
REST
Apps Script
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works",
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

await main();
Multi-turn conversations (Chat)
Our SDKs provide functionality to collect multiple rounds of prompts and responses into a chat, giving you an easy way to keep track of the conversation history.

Note: Chat functionality is only implemented as part of the SDKs. Behind the scenes, it still uses the generateContent API. For multi-turn conversations, the full conversation history is sent to the model with each follow-up turn.
Python
JavaScript
Go
REST
Apps Script
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  const response1 = await chat.sendMessage({
    message: "I have 2 dogs in my house.",
  });
  console.log("Chat response 1:", response1.text);

  const response2 = await chat.sendMessage({
    message: "How many paws are in my house?",
  });
  console.log("Chat response 2:", response2.text);
}

await main();
Streaming can also be used for multi-turn conversations.

Python
JavaScript
Go
REST
Apps Script
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  const stream1 = await chat.sendMessageStream({
    message: "I have 2 dogs in my house.",
  });
  for await (const chunk of stream1) {
    console.log(chunk.text);
    console.log("_".repeat(80));
  }

  const stream2 = await chat.sendMessageStream({
    message: "How many paws are in my house?",
  });
  for await (const chunk of stream2) {
    console.log(chunk.text);
    console.log("_".repeat(80));
  }
}

await main();
Supported models
All models in the Gemini family support text generation. To learn more about the models and their capabilities, visit the Models page.

Best practices
Prompting tips
For basic text generation, a zero-shot prompt often suffices without needing examples, system instructions or specific formatting.

For more tailored outputs:

Use System instructions to guide the model.
Provide few example inputs and outputs to guide the model. This is often referred to as few-shot prompting.
Consult our prompt engineering guide for more tips.

Structured output
In some cases, you may need structured output, such as JSON. Refer to our structured output guide to learn how.

What's next
Try the Gemini API getting started Colab.
Explore Gemini's image, video, audio and document understanding capabilities.
Learn about multimodal file prompting strategies.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackSpeech generation (text-to-speech)

The Gemini API can transform text input into single speaker or multi-speaker audio using native text-to-speech (TTS) generation capabilities. Text-to-speech (TTS) generation is controllable, meaning you can use natural language to structure interactions and guide the style, accent, pace, and tone of the audio.

The TTS capability differs from speech generation provided through the Live API, which is designed for interactive, unstructured audio, and multimodal inputs and outputs. While the Live API excels in dynamic conversational contexts, TTS through the Gemini API is tailored for scenarios that require exact text recitation with fine-grained control over style and sound, such as podcast or audiobook generation.

This guide shows you how to generate single-speaker and multi-speaker audio from text.

Preview: Native text-to-speech (TTS) is in Preview.
Before you begin
Ensure you use a Gemini 2.5 model variant with native text-to-speech (TTS) capabilities, as listed in the Supported models section. For optimal results, consider which model best fits your specific use case.

You may find it useful to test the Gemini 2.5 TTS models in AI Studio before you start building.

Note: TTS models accept text-only inputs and produce audio-only outputs. For a complete list of restrictions specific to TTS models, review the Limitations section.
Single-speaker text-to-speech
To convert text to single-speaker audio, set the response modality to "audio", and pass a SpeechConfig object with VoiceConfig set. You'll need to choose a voice name from the prebuilt output voices.

This example saves the output audio from the model in a wave file:

Python
JavaScript
REST

import {GoogleGenAI} from '@google/genai';
import wav from 'wav';

async function saveWaveFile(
   filename,
   pcmData,
   channels = 1,
   rate = 24000,
   sampleWidth = 2,
) {
   return new Promise((resolve, reject) => {
      const writer = new wav.FileWriter(filename, {
            channels,
            sampleRate: rate,
            bitDepth: sampleWidth * 8,
      });

      writer.on('finish', resolve);
      writer.on('error', reject);

      writer.write(pcmData);
      writer.end();
   });
}

async function main() {
   const ai = new GoogleGenAI({});

   const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: 'Say cheerfully: Have a wonderful day!' }] }],
      config: {
            responseModalities: ['AUDIO'],
            speechConfig: {
               voiceConfig: {
                  prebuiltVoiceConfig: { voiceName: 'Kore' },
               },
            },
      },
   });

   const data = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
   const audioBuffer = Buffer.from(data, 'base64');

   const fileName = 'out.wav';
   await saveWaveFile(fileName, audioBuffer);
}
await main();
Multi-speaker text-to-speech
For multi-speaker audio, you'll need a MultiSpeakerVoiceConfig object with each speaker (up to 2) configured as a SpeakerVoiceConfig. You'll need to define each speaker with the same names used in the prompt:

Python
JavaScript
REST
import {GoogleGenAI} from '@google/genai';
import wav from 'wav';

async function saveWaveFile(
   filename,
   pcmData,
   channels = 1,
   rate = 24000,
   sampleWidth = 2,
) {
   return new Promise((resolve, reject) => {
      const writer = new wav.FileWriter(filename, {
            channels,
            sampleRate: rate,
            bitDepth: sampleWidth * 8,
      });

      writer.on('finish', resolve);
      writer.on('error', reject);

      writer.write(pcmData);
      writer.end();
   });
}

async function main() {
   const ai = new GoogleGenAI({});

   const prompt = `TTS the following conversation between Joe and Jane:
         Joe: How's it going today Jane?
         Jane: Not too bad, how about you?`;

   const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
            responseModalities: ['AUDIO'],
            speechConfig: {
               multiSpeakerVoiceConfig: {
                  speakerVoiceConfigs: [
                        {
                           speaker: 'Joe',
                           voiceConfig: {
                              prebuiltVoiceConfig: { voiceName: 'Kore' }
                           }
                        },
                        {
                           speaker: 'Jane',
                           voiceConfig: {
                              prebuiltVoiceConfig: { voiceName: 'Puck' }
                           }
                        }
                  ]
               }
            }
      }
   });

   const data = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
   const audioBuffer = Buffer.from(data, 'base64');

   const fileName = 'out.wav';
   await saveWaveFile(fileName, audioBuffer);
}

await main();
Controlling speech style with prompts
You can control style, tone, accent, and pace using natural language prompts for both single- and multi-speaker TTS. For example, in a single-speaker prompt, you can say:

Say in an spooky whisper:
"By the pricking of my thumbs...
Something wicked this way comes"
In a multi-speaker prompt, provide the model with each speaker's name and corresponding transcript. You can also provide guidance for each speaker individually:

Make Speaker1 sound tired and bored, and Speaker2 sound excited and happy:

Speaker1: So... what's on the agenda today?
Speaker2: You're never going to guess!
Try using a voice option that corresponds to the style or emotion you want to convey, to emphasize it even more. In the previous prompt, for example, Enceladus's breathiness might emphasize "tired" and "bored", while Puck's upbeat tone could complement "excited" and "happy".

Generating a prompt to convert to audio
The TTS models only output audio, but you can use other models to generate a transcript first, then pass that transcript to the TTS model to read aloud.

Python
JavaScript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {

const transcript = await ai.models.generateContent({
   model: "gemini-2.0-flash",
   contents: "Generate a short transcript around 100 words that reads like it was clipped from a podcast by excited herpetologists. The hosts names are Dr. Anya and Liam.",
   })

const response = await ai.models.generateContent({
   model: "gemini-2.5-flash-preview-tts",
   contents: transcript,
   config: {
      responseModalities: ['AUDIO'],
      speechConfig: {
         multiSpeakerVoiceConfig: {
            speakerVoiceConfigs: [
                   {
                     speaker: "Dr. Anya",
                     voiceConfig: {
                        prebuiltVoiceConfig: {voiceName: "Kore"},
                     }
                  },
                  {
                     speaker: "Liam",
                     voiceConfig: {
                        prebuiltVoiceConfig: {voiceName: "Puck"},
                    }
                  }
                ]
              }
            }
      }
  });
}
// ..JavaScript code for exporting .wav file for output audio

await main();
Voice options
TTS models support the following 30 voice options in the voice_name field:

Zephyr -- Bright	Puck -- Upbeat	Charon -- Informative
Kore -- Firm	Fenrir -- Excitable	Leda -- Youthful
Orus -- Firm	Aoede -- Breezy	Callirrhoe -- Easy-going
Autonoe -- Bright	Enceladus -- Breathy	Iapetus -- Clear
Umbriel -- Easy-going	Algieba -- Smooth	Despina -- Smooth
Erinome -- Clear	Algenib -- Gravelly	Rasalgethi -- Informative
Laomedeia -- Upbeat	Achernar -- Soft	Alnilam -- Firm
Schedar -- Even	Gacrux -- Mature	Pulcherrima -- Forward
Achird -- Friendly	Zubenelgenubi -- Casual	Vindemiatrix -- Gentle
Sadachbia -- Lively	Sadaltager -- Knowledgeable	Sulafat -- Warm
You can hear all the voice options in AI Studio.

Supported languages
The TTS models detect the input language automatically. They support the following 24 languages:

Language	BCP-47 Code	Language	BCP-47 Code
Arabic (Egyptian)	ar-EG	German (Germany)	de-DE
English (US)	en-US	Spanish (US)	es-US
French (France)	fr-FR	Hindi (India)	hi-IN
Indonesian (Indonesia)	id-ID	Italian (Italy)	it-IT
Japanese (Japan)	ja-JP	Korean (Korea)	ko-KR
Portuguese (Brazil)	pt-BR	Russian (Russia)	ru-RU
Dutch (Netherlands)	nl-NL	Polish (Poland)	pl-PL
Thai (Thailand)	th-TH	Turkish (Turkey)	tr-TR
Vietnamese (Vietnam)	vi-VN	Romanian (Romania)	ro-RO
Ukrainian (Ukraine)	uk-UA	Bengali (Bangladesh)	bn-BD
English (India)	en-IN & hi-IN bundle	Marathi (India)	mr-IN
Tamil (India)	ta-IN	Telugu (India)	te-IN
Supported models
Model	Single speaker	Multispeaker
Gemini 2.5 Flash Preview TTS	✔️	✔️
Gemini 2.5 Pro Preview TTS	✔️	✔️
Limitations
TTS models can only receive text inputs and generate audio outputs.
A TTS session has a context window limit of 32k tokens.
Review Languages section for language support.
What's next
Try the audio generation cookbook.
Gemini's Live API offers interactive audio generation options you can interleave with other modalities.
For working with audio inputs, visit the Audio understanding guide.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-22 UTC.

Terms
Privacy

English
The new page has loaded..Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackAudio understanding

Gemini can analyze and understand audio input, enabling use cases like the following:

Describe, summarize, or answer questions about audio content.
Provide a transcription of the audio.
Analyze specific segments of the audio.
This guide shows you how to use the Gemini API to generate a text response to audio input.

Before you begin
Before calling the Gemini API, ensure you have your SDK of choice installed, and a Gemini API key configured and ready to use.

Input audio
You can provide audio data to Gemini in the following ways:

Upload an audio file before making a request to generateContent.
Pass inline audio data with the request to generateContent.
Upload an audio file
You can use the Files API to upload an audio file. Always use the Files API when the total request size (including the files, text prompt, system instructions, etc.) is larger than 20 MB.

The following code uploads an audio file and then uses the file in a call to generateContent.

Python
JavaScript
Go
REST

import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const myfile = await ai.files.upload({
    file: "path/to/sample.mp3",
    config: { mimeType: "audio/mp3" },
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: createUserContent([
      createPartFromUri(myfile.uri, myfile.mimeType),
      "Describe this audio clip",
    ]),
  });
  console.log(response.text);
}

await main();
To learn more about working with media files, see Files API.

Pass audio data inline
Instead of uploading an audio file, you can pass inline audio data in the request to generateContent:

Python
JavaScript
Go
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

const ai = new GoogleGenAI({});
const base64AudioFile = fs.readFileSync("path/to/small-sample.mp3", {
  encoding: "base64",
});

const contents = [
  { text: "Please summarize the audio." },
  {
    inlineData: {
      mimeType: "audio/mp3",
      data: base64AudioFile,
    },
  },
];

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: contents,
});
console.log(response.text);
A few things to keep in mind about inline audio data:

The maximum request size is 20 MB, which includes text prompts, system instructions, and files provided inline. If your file's size will make the total request size exceed 20 MB, then use the Files API to upload an audio file for use in the request.
If you're using an audio sample multiple times, it's more efficient to upload an audio file.
Get a transcript
To get a transcript of audio data, just ask for it in the prompt:

Python
JavaScript
Go
import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";

const ai = new GoogleGenAI({});
const myfile = await ai.files.upload({
  file: "path/to/sample.mp3",
  config: { mimeType: "audio/mpeg" },
});

const result = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: createUserContent([
    createPartFromUri(myfile.uri, myfile.mimeType),
    "Generate a transcript of the speech.",
  ]),
});
console.log("result.text=", result.text);
Refer to timestamps
You can refer to specific sections of an audio file using timestamps of the form MM:SS. For example, the following prompt requests a transcript that

Starts at 2 minutes 30 seconds from the beginning of the file.
Ends at 3 minutes 29 seconds from the beginning of the file.

Python
JavaScript
Go
// Create a prompt containing timestamps.
const prompt = "Provide a transcript of the speech from 02:30 to 03:29."
Count tokens
Call the countTokens method to get a count of the number of tokens in an audio file. For example:

Python
JavaScript
Go
import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";

const ai = new GoogleGenAI({});
const myfile = await ai.files.upload({
  file: "path/to/sample.mp3",
  config: { mimeType: "audio/mpeg" },
});

const countTokensResponse = await ai.models.countTokens({
  model: "gemini-2.5-flash",
  contents: createUserContent([
    createPartFromUri(myfile.uri, myfile.mimeType),
  ]),
});
console.log(countTokensResponse.totalTokens);
Supported audio formats
Gemini supports the following audio format MIME types:

WAV - audio/wav
MP3 - audio/mp3
AIFF - audio/aiff
AAC - audio/aac
OGG Vorbis - audio/ogg
FLAC - audio/flac
Technical details about audio
Gemini represents each second of audio as 32 tokens; for example, one minute of audio is represented as 1,920 tokens.
Gemini can "understand" non-speech components, such as birdsong or sirens.
The maximum supported length of audio data in a single prompt is 9.5 hours. Gemini doesn't limit the number of audio files in a single prompt; however, the total combined length of all audio files in a single prompt can't exceed 9.5 hours.
Gemini downsamples audio files to a 16 Kbps data resolution.
If the audio source contains multiple channels, Gemini combines those channels into a single channel.
What's next
This guide shows how to generate text in response to audio data. To learn more, see the following resources:

File prompting strategies: The Gemini API supports prompting with text, image, audio, and video data, also known as multimodal prompting.
System instructions: System instructions let you steer the behavior of the model based on your specific needs and use cases.
Safety guidance: Sometimes generative AI models produce unexpected outputs, such as outputs that are inaccurate, biased, or offensive. Post-processing and human evaluation are essential to limit the risk of harm from such outputs.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-26 UTC.

Terms
Privacy

English
The new page has loaded.Skip to main content
Gemini API
Search
/


English
Community
Cookbook
Get API key
Sign in
Gemini API docs
API Reference

A new native audio model is available for the Live API. Learn more
Home
Gemini API
Gemini API docs
Was this helpful?

Send feedbackFunction calling with the Gemini API

Function calling lets you connect models to external tools and APIs. Instead of generating text responses, the model determines when to call specific functions and provides the necessary parameters to execute real-world actions. This allows the model to act as a bridge between natural language and real-world actions and data. Function calling has 3 primary use cases:

Augment Knowledge: Access information from external sources like databases, APIs, and knowledge bases.
Extend Capabilities: Use external tools to perform computations and extend the limitations of the model, such as using a calculator or creating charts.
Take Actions: Interact with external systems using APIs, such as scheduling appointments, creating invoices, sending emails, or controlling smart home devices.
Get Weather Schedule Meeting Create Chart

Python
JavaScript
REST

import { GoogleGenAI, Type } from '@google/genai';

// Configure the client
const ai = new GoogleGenAI({});

// Define the function declaration for the model
const scheduleMeetingFunctionDeclaration = {
  name: 'schedule_meeting',
  description: 'Schedules a meeting with specified attendees at a given time and date.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      attendees: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: 'List of people attending the meeting.',
      },
      date: {
        type: Type.STRING,
        description: 'Date of the meeting (e.g., "2024-07-29")',
      },
      time: {
        type: Type.STRING,
        description: 'Time of the meeting (e.g., "15:00")',
      },
      topic: {
        type: Type.STRING,
        description: 'The subject or topic of the meeting.',
      },
    },
    required: ['attendees', 'date', 'time', 'topic'],
  },
};

// Send request with function declarations
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: 'Schedule a meeting with Bob and Alice for 03/27/2025 at 10:00 AM about the Q3 planning.',
  config: {
    tools: [{
      functionDeclarations: [scheduleMeetingFunctionDeclaration]
    }],
  },
});

// Check for function calls in the response
if (response.functionCalls && response.functionCalls.length > 0) {
  const functionCall = response.functionCalls[0]; // Assuming one function call
  console.log(`Function to call: ${functionCall.name}`);
  console.log(`Arguments: ${JSON.stringify(functionCall.args)}`);
  // In a real app, you would call your actual function here:
  // const result = await scheduleMeeting(functionCall.args);
} else {
  console.log("No function call found in the response.");
  console.log(response.text);
}
How function calling works
function calling
overview

Function calling involves a structured interaction between your application, the model, and external functions. Here's a breakdown of the process:

Define Function Declaration: Define the function declaration in your application code. Function Declarations describe the function's name, parameters, and purpose to the model.
Call LLM with function declarations: Send user prompt along with the function declaration(s) to the model. It analyzes the request and determines if a function call would be helpful. If so, it responds with a structured JSON object.
Execute Function Code (Your Responsibility): The Model does not execute the function itself. It's your application's responsibility to process the response and check for Function Call, if
Yes: Extract the name and args of the function and execute the corresponding function in your application.
No: The model has provided a direct text response to the prompt (this flow is less emphasized in the example but is a possible outcome).
Create User friendly response: If a function was executed, capture the result and send it back to the model in a subsequent turn of the conversation. It will use the result to generate a final, user-friendly response that incorporates the information from the function call.
This process can be repeated over multiple turns, allowing for complex interactions and workflows. The model also supports calling multiple functions in a single turn (parallel function calling) and in sequence (compositional function calling).

Step 1: Define a function declaration
Define a function and its declaration within your application code that allows users to set light values and make an API request. This function could call external services or APIs.

Python
JavaScript
import { Type } from '@google/genai';

// Define a function that the model can call to control smart lights
const setLightValuesFunctionDeclaration = {
  name: 'set_light_values',
  description: 'Sets the brightness and color temperature of a light.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      brightness: {
        type: Type.NUMBER,
        description: 'Light level from 0 to 100. Zero is off and 100 is full brightness',
      },
      color_temp: {
        type: Type.STRING,
        enum: ['daylight', 'cool', 'warm'],
        description: 'Color temperature of the light fixture, which can be `daylight`, `cool` or `warm`.',
      },
    },
    required: ['brightness', 'color_temp'],
  },
};

/**

*   Set the brightness and color temperature of a room light. (mock API)
*   @param {number} brightness - Light level from 0 to 100. Zero is off and 100 is full brightness
*   @param {string} color_temp - Color temperature of the light fixture, which can be `daylight`, `cool` or `warm`.
*   @return {Object} A dictionary containing the set brightness and color temperature.
*/
function setLightValues(brightness, color_temp) {
  return {
    brightness: brightness,
    colorTemperature: color_temp
  };
}
Step 2: Call the model with function declarations
Once you have defined your function declarations, you can prompt the model to use them. It analyzes the prompt and function declarations and decides whether to respond directly or to call a function. If a function is called, the response object will contain a function call suggestion.

Python
JavaScript
import { GoogleGenAI } from '@google/genai';

// Generation config with function declaration
const config = {
  tools: [{
    functionDeclarations: [setLightValuesFunctionDeclaration]
  }]
};

// Configure the client
const ai = new GoogleGenAI({});

// Define user prompt
const contents = [
  {
    role: 'user',
    parts: [{ text: 'Turn the lights down to a romantic level' }]
  }
];

// Send request with function declarations
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: contents,
  config: config
});

console.log(response.functionCalls[0]);
The model then returns a functionCall object in an OpenAPI compatible schema specifying how to call one or more of the declared functions in order to respond to the user's question.

Python
JavaScript
{
  name: 'set_light_values',
  args: { brightness: 25, color_temp: 'warm' }
}
Step 3: Execute set_light_values function code
Extract the function call details from the model's response, parse the arguments , and execute the set_light_values function.

Python
JavaScript
// Extract tool call details
const tool_call = response.functionCalls[0]

let result;
if (tool_call.name === 'set_light_values') {
  result = setLightValues(tool_call.args.brightness, tool_call.args.color_temp);
  console.log(`Function execution result: ${JSON.stringify(result)}`);
}
Step 4: Create user friendly response with function result and call the model again
Finally, send the result of the function execution back to the model so it can incorporate this information into its final response to the user.

Python
JavaScript
// Create a function response part
const function_response_part = {
  name: tool_call.name,
  response: { result }
}

// Append function call and result of the function execution to contents
contents.push(response.candidates[0].content);
contents.push({ role: 'user', parts: [{ functionResponse: function_response_part }] });

// Get the final response from the model
const final_response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: contents,
  config: config
});

console.log(final_response.text);
This completes the function calling flow. The model successfully used the set_light_values function to perform the request action of the user.

Function declarations
When you implement function calling in a prompt, you create a tools object, which contains one or more function declarations. You define functions using JSON, specifically with a select subset of the OpenAPI schema format. A single function declaration can include the following parameters:

name (string): A unique name for the function (get_weather_forecast, send_email). Use descriptive names without spaces or special characters (use underscores or camelCase).
description (string): A clear and detailed explanation of the function's purpose and capabilities. This is crucial for the model to understand when to use the function. Be specific and provide examples if helpful ("Finds theaters based on location and optionally movie title which is currently playing in theaters.").
parameters (object): Defines the input parameters the function expects.
type (string): Specifies the overall data type, such as object.
properties (object): Lists individual parameters, each with:
type (string): The data type of the parameter, such as string, integer, boolean, array.
description (string): A description of the parameter's purpose and format. Provide examples and constraints ("The city and state, e.g., 'San Francisco, CA' or a zip code e.g., '95616'.").
enum (array, optional): If the parameter values are from a fixed set, use "enum" to list the allowed values instead of just describing them in the description. This improves accuracy ("enum": ["daylight", "cool", "warm"]).
required (array): An array of strings listing the parameter names that are mandatory for the function to operate.
You can also construct FunctionDeclarations from Python functions directly using types.FunctionDeclaration.from_callable(client=client, callable=your_function).

Function calling with thinking
Enabling "thinking" can improve function call performance by allowing the model to reason through a request before suggesting function calls. The Gemini API is stateless, the model's reasoning context will be lost between turns in a multi-turn conversation. To preserve this context, you can use thought signatures. A thought signature is an encrypted representation of the model's internal thought process that you pass back to the model on subsequent turns.

The standard pattern for multi-turn tool use is to append the model's complete previous response to the conversation history. The content object includes the thought_signatures automatically. If you follow this pattern No code changes are required.

Manually managing thought signatures
If you modify the conversation history manually—instead of sending the complete previous response and want to benefit from thinking you must correctly handle the thought_signature included in the model's turn.

Follow these rules to ensure the model's context is preserved:

Always send the thought_signature back to the model inside its original Part.
Don't merge a Part containing a signature with one that does not. This breaks the positional context of the thought.
Don't combine two Parts that both contain signatures, as the signature strings cannot be merged.
Inspecting Thought Signatures
While not necessary for implementation, you can inspect the response to see the thought_signature for debugging or educational purposes.

Python
JavaScript
// After receiving a response from a model with thinking enabled
// const response = await ai.models.generateContent(...)

// The signature is attached to the response part containing the function call
const part = response.candidates[0].content.parts[0];
if (part.thoughtSignature) {
  console.log(part.thoughtSignature);
}
Learn more about limitations and usage of thought signatures, and about thinking models in general, on the Thinking page.

Parallel function calling
In addition to single turn function calling, you can also call multiple functions at once. Parallel function calling lets you execute multiple functions at once and is used when the functions are not dependent on each other. This is useful in scenarios like gathering data from multiple independent sources, such as retrieving customer details from different databases or checking inventory levels across various warehouses or performing multiple actions such as converting your apartment into a disco.

Python
JavaScript
import { Type } from '@google/genai';

const powerDiscoBall = {
  name: 'power_disco_ball',
  description: 'Powers the spinning disco ball.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      power: {
        type: Type.BOOLEAN,
        description: 'Whether to turn the disco ball on or off.'
      }
    },
    required: ['power']
  }
};

const startMusic = {
  name: 'start_music',
  description: 'Play some music matching the specified parameters.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      energetic: {
        type: Type.BOOLEAN,
        description: 'Whether the music is energetic or not.'
      },
      loud: {
        type: Type.BOOLEAN,
        description: 'Whether the music is loud or not.'
      }
    },
    required: ['energetic', 'loud']
  }
};

const dimLights = {
  name: 'dim_lights',
  description: 'Dim the lights.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      brightness: {
        type: Type.NUMBER,
        description: 'The brightness of the lights, 0.0 is off, 1.0 is full.'
      }
    },
    required: ['brightness']
  }
};
Configure the function calling mode to allow using all of the specified tools. To learn more, you can read about configuring function calling.

Python
JavaScript
import { GoogleGenAI } from '@google/genai';

// Set up function declarations
const houseFns = [powerDiscoBall, startMusic, dimLights];

const config = {
    tools: [{
        functionDeclarations: houseFns
    }],
    // Force the model to call 'any' function, instead of chatting.
    toolConfig: {
        functionCallingConfig: {
            mode: 'any'
        }
    }
};

// Configure the client
const ai = new GoogleGenAI({});

// Create a chat session
const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: config
});
const response = await chat.sendMessage({message: 'Turn this place into a party!'});

// Print out each of the function calls requested from this single call
console.log("Example 1: Forced function calling");
for (const fn of response.functionCalls) {
    const args = Object.entries(fn.args)
        .map(([key, val]) => `${key}=${val}`)
        .join(', ');
    console.log(`${fn.name}(${args})`);
}
Each of the printed results reflects a single function call that the model has requested. To send the results back, include the responses in the same order as they were requested.

The Python SDK supports automatic function calling, which automatically converts Python functions to declarations, handles the function call execution and response cycle for you. Following is an example for the disco use case.

Note: Automatic Function Calling is a Python SDK only feature at the moment.
Python
from google import genai
from google.genai import types

# Actual function implementations
def power_disco_ball_impl(power: bool) -> dict:
    """Powers the spinning disco ball.

    Args:
        power: Whether to turn the disco ball on or off.

    Returns:
        A status dictionary indicating the current state.
    """
    return {"status": f"Disco ball powered {'on' if power else 'off'}"}

def start_music_impl(energetic: bool, loud: bool) -> dict:
    """Play some music matching the specified parameters.

    Args:
        energetic: Whether the music is energetic or not.
        loud: Whether the music is loud or not.

    Returns:
        A dictionary containing the music settings.
    """
    music_type = "energetic" if energetic else "chill"
    volume = "loud" if loud else "quiet"
    return {"music_type": music_type, "volume": volume}

def dim_lights_impl(brightness: float) -> dict:
    """Dim the lights.

    Args:
        brightness: The brightness of the lights, 0.0 is off, 1.0 is full.

    Returns:
        A dictionary containing the new brightness setting.
    """
    return {"brightness": brightness}

# Configure the client
client = genai.Client()
config = types.GenerateContentConfig(
    tools=[power_disco_ball_impl, start_music_impl, dim_lights_impl]
)

# Make the request
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Do everything you need to this place into party!",
    config=config,
)

print("\nExample 2: Automatic function calling")
print(response.text)
# I've turned on the disco ball, started playing loud and energetic music, and dimmed the lights to 50% brightness. Let's get this party started!
Compositional function calling
Compositional or sequential function calling allows Gemini to chain multiple function calls together to fulfill a complex request. For example, to answer "Get the temperature in my current location", the Gemini API might first invoke a get_current_location() function followed by a get_weather() function that takes the location as a parameter.

The following example demonstrates how to implement compositional function calling using the Python SDK and automatic function calling.

Python
JavaScript
This example shows how to use JavaScript/TypeScript SDK to do comopositional function calling using a manual execution loop.

import { GoogleGenAI, Type } from "@google/genai";

// Configure the client
const ai = new GoogleGenAI({});

// Example Functions
function get_weather_forecast({ location }) {
  console.log(`Tool Call: get_weather_forecast(location=${location})`);
  // TODO: Make API call
  console.log("Tool Response: {'temperature': 25, 'unit': 'celsius'}");
  return { temperature: 25, unit: "celsius" };
}

function set_thermostat_temperature({ temperature }) {
  console.log(
    `Tool Call: set_thermostat_temperature(temperature=${temperature})`,
  );
  // TODO: Make API call
  console.log("Tool Response: {'status': 'success'}");
  return { status: "success" };
}

const toolFunctions = {
  get_weather_forecast,
  set_thermostat_temperature,
};

const tools = [
  {
    functionDeclarations: [
      {
        name: "get_weather_forecast",
        description:
          "Gets the current weather temperature for a given location.",
        parameters: {
          type: Type.OBJECT,
          properties: {
            location: {
              type: Type.STRING,
            },
          },
          required: ["location"],
        },
      },
      {
        name: "set_thermostat_temperature",
        description: "Sets the thermostat to a desired temperature.",
        parameters: {
          type: Type.OBJECT,
          properties: {
            temperature: {
              type: Type.NUMBER,
            },
          },
          required: ["temperature"],
        },
      },
    ],
  },
];

// Prompt for the model
let contents = [
  {
    role: "user",
    parts: [
      {
        text: "If it's warmer than 20°C in London, set the thermostat to 20°C, otherwise set it to 18°C.",
      },
    ],
  },
];

// Loop until the model has no more function calls to make
while (true) {
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents,
    config: { tools },
  });

  if (result.functionCalls && result.functionCalls.length > 0) {
    const functionCall = result.functionCalls[0];

    const { name, args } = functionCall;

    if (!toolFunctions[name]) {
      throw new Error(`Unknown function call: ${name}`);
    }

    // Call the function and get the response.
    const toolResponse = toolFunctions[name](args);

    const functionResponsePart = {
      name: functionCall.name,
      response: {
        result: toolResponse,
      },
    };

    // Send the function response back to the model.
    contents.push({
      role: "model",
      parts: [
        {
          functionCall: functionCall,
        },
      ],
    });
    contents.push({
      role: "user",
      parts: [
        {
          functionResponse: functionResponsePart,
        },
      ],
    });
  } else {
    // No more function calls, break the loop.
    console.log(result.text);
    break;
  }
}
Expected Output

When you run the code, you will see the SDK orchestrating the function calls. The model first calls get_weather_forecast, receives the temperature, and then calls set_thermostat_temperature with the correct value based on the logic in the prompt.

Tool Call: get_weather_forecast(location=London)
Tool Response: {'temperature': 25, 'unit': 'celsius'}
Tool Call: set_thermostat_temperature(temperature=20)
Tool Response: {'status': 'success'}
OK. It's 25°C in London, so I've set the thermostat to 20°C.
Compositional function calling is a native Live API feature. This means Live API can handle the function calling similar to the Python SDK.

Python
JavaScript
// Light control schemas
const turnOnTheLightsSchema = { name: 'turn_on_the_lights' };
const turnOffTheLightsSchema = { name: 'turn_off_the_lights' };

const prompt = `
  Hey, can you write run some python code to turn on the lights, wait 10s and then turn off the lights?
`;

const tools = [
  { codeExecution: {} },
  { functionDeclarations: [turnOnTheLightsSchema, turnOffTheLightsSchema] }
];

await run(prompt, tools=tools, modality="AUDIO")
Function calling modes
The Gemini API lets you control how the model uses the provided tools (function declarations). Specifically, you can set the mode within the.function_calling_config.

AUTO (Default): The model decides whether to generate a natural language response or suggest a function call based on the prompt and context. This is the most flexible mode and recommended for most scenarios.
ANY: The model is constrained to always predict a function call and guarantees function schema adherence. If allowed_function_names is not specified, the model can choose from any of the provided function declarations. If allowed_function_names is provided as a list, the model can only choose from the functions in that list. Use this mode when you require a function call response to every prompt (if applicable).
NONE: The model is prohibited from making function calls. This is equivalent to sending a request without any function declarations. Use this to temporarily disable function calling without removing your tool definitions.

Python
JavaScript
import { FunctionCallingConfigMode } from '@google/genai';

// Configure function calling mode
const toolConfig = {
  functionCallingConfig: {
    mode: FunctionCallingConfigMode.ANY,
    allowedFunctionNames: ['get_current_temperature']
  }
};

// Create the generation config
const config = {
  tools: tools, // not defined here.
  toolConfig: toolConfig,
};
Automatic function calling (Python only)
When using the Python SDK, you can provide Python functions directly as tools. The SDK converts these functions into declarations, manages the function call execution, and handles the response cycle for you. Define your function with type hints and a docstring. For optimal results, it is recommended to use Google-style docstrings. The SDK will then automatically:

Detect function call responses from the model.
Call the corresponding Python function in your code.
Send the function's response back to the model.
Return the model's final text response.
The SDK currently does not parse argument descriptions into the property description slots of the generated function declaration. Instead, it sends the entire docstring as the top-level function description.

Python
from google import genai
from google.genai import types

# Define the function with type hints and docstring
def get_current_temperature(location: str) -> dict:
    """Gets the current temperature for a given location.

    Args:
        location: The city and state, e.g. San Francisco, CA

    Returns:
        A dictionary containing the temperature and unit.
    """
    # ... (implementation) ...
    return {"temperature": 25, "unit": "Celsius"}

# Configure the client
client = genai.Client()
config = types.GenerateContentConfig(
    tools=[get_current_temperature]
)  # Pass the function itself

# Make the request
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="What's the temperature in Boston?",
    config=config,
)

print(response.text)  # The SDK handles the function call and returns the final text
You can disable automatic function calling with:

Python
config = types.GenerateContentConfig(
    tools=[get_current_temperature],
    automatic_function_calling=types.AutomaticFunctionCallingConfig(disable=True)
)
Automatic function schema declaration
The API is able to describe any of the following types. Pydantic types are allowed, as long as the fields defined on them are also composed of allowed types. Dict types (like dict[str: int]) are not well supported here, don't use them.

Python
AllowedType = (
  int | float | bool | str | list['AllowedType'] | pydantic.BaseModel)
To see what the inferred schema looks like, you can convert it using from_callable:

Python
from google import genai
from google.genai import types

def multiply(a: float, b: float):
    """Returns a * b."""
    return a * b

client = genai.Client()
fn_decl = types.FunctionDeclaration.from_callable(callable=multiply, client=client)

# to_json_dict() provides a clean JSON representation.
print(fn_decl.to_json_dict())
Multi-tool use: Combine native tools with function calling
You can enable multiple tools combining native tools with function calling at the same time. Here's an example that enables two tools, Grounding with Google Search and code execution, in a request using the Live API.

Note: Multi-tool use is a-Live API only feature at the moment. The run() function declaration, which handles the asynchronous websocket setup, is omitted for brevity.
Python
JavaScript
// Multiple tasks example - combining lights, code execution, and search
const prompt = `
  Hey, I need you to do three things for me.

    1.  Turn on the lights.
    2.  Then compute the largest prime palindrome under 100000.
    3.  Then use Google Search to look up information about the largest earthquake in California the week of Dec 5 2024.

  Thanks!
`;

const tools = [
  { googleSearch: {} },
  { codeExecution: {} },
  { functionDeclarations: [turnOnTheLightsSchema, turnOffTheLightsSchema] } // not defined here.
];

// Execute the prompt with specified tools in audio modality
await run(prompt, {tools: tools, modality: "AUDIO"});
Python developers can try this out in the Live API Tool Use notebook.

Model context protocol (MCP)
Model Context Protocol (MCP) is an open standard for connecting AI applications with external tools and data. MCP provides a common protocol for models to access context, such as functions (tools), data sources (resources), or predefined prompts.

The Gemini SDKs have built-in support for the MCP, reducing boilerplate code and offering automatic tool calling for MCP tools. When the model generates an MCP tool call, the Python and JavaScript client SDK can automatically execute the MCP tool and send the response back to the model in a subsequent request, continuing this loop until no more tool calls are made by the model.

Here, you can find an example of how to use a local MCP server with Gemini and mcp SDK.

Python
JavaScript
Make sure the latest version of the mcp SDK is installed on your platform of choice.

npm install @modelcontextprotocol/sdk
Note: JavaScript supports automatic tool calling by wrapping the client with mcpToTool. If you want to disable it, you can provide automaticFunctionCalling with disabled true.
import { GoogleGenAI, FunctionCallingConfigMode , mcpToTool} from '@google/genai';
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

// Create server parameters for stdio connection
const serverParams = new StdioClientTransport({
  command: "npx", // Executable
  args: ["-y", "@philschmid/weather-mcp"] // MCP Server
});

const client = new Client(
  {
    name: "example-client",
    version: "1.0.0"
  }
);

// Configure the client
const ai = new GoogleGenAI({});

// Initialize the connection between client and server
await client.connect(serverParams);

// Send request to the model with MCP tools
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: `What is the weather in London in ${new Date().toLocaleDateString()}?`,
  config: {
    tools: [mcpToTool(client)],  // uses the session, will automatically call the tool
    // Uncomment if you **don't** want the sdk to automatically call the tool
    // automaticFunctionCalling: {
    //   disable: true,
    // },
  },
});
console.log(response.text)

// Close the connection
await client.close();
Limitations with built-in MCP support
Built-in MCP support is a experimental feature in our SDKs and has the following limitations:

Only tools are supported, not resources nor prompts
It is available for the Python and JavaScript/TypeScript SDK.
Breaking changes might occur in future releases.
Manual integration of MCP servers is always an option if these limit what you're building.

Supported models
This section lists models and their function calling capabilities. Experimental models are not included. You can find a comprehensive capabilities overview on the model overview page.

Model	Function Calling	Parallel Function Calling	Compositional Function Calling
Gemini 2.5 Pro	✔️	✔️	✔️
Gemini 2.5 Flash	✔️	✔️	✔️
Gemini 2.5 Flash-Lite	✔️	✔️	✔️
Gemini 2.0 Flash	✔️	✔️	✔️
Gemini 2.0 Flash-Lite	X	X	X
Best practices
Function and Parameter Descriptions: Be extremely clear and specific in your descriptions. The model relies on these to choose the correct function and provide appropriate arguments.
Naming: Use descriptive function names (without spaces, periods, or dashes).
Strong Typing: Use specific types (integer, string, enum) for parameters to reduce errors. If a parameter has a limited set of valid values, use an enum.
Tool Selection: While the model can use an arbitrary number of tools, providing too many can increase the risk of selecting an incorrect or suboptimal tool. For best results, aim to provide only the relevant tools for the context or task, ideally keeping the active set to a maximum of 10-20. Consider dynamic tool selection based on conversation context if you have a large total number of tools.
Prompt Engineering:
Provide context: Tell the model its role (e.g., "You are a helpful weather assistant.").
Give instructions: Specify how and when to use functions (e.g., "Don't guess dates; always use a future date for forecasts.").
Encourage clarification: Instruct the model to ask clarifying questions if needed.
Temperature: Use a low temperature (e.g., 0) for more deterministic and reliable function calls.
Validation: If a function call has significant consequences (e.g., placing an order), validate the call with the user before executing it.
Error Handling: Implement robust error handling in your functions to gracefully handle unexpected inputs or API failures. Return informative error messages that the model can use to generate helpful responses to the user.
Security: Be mindful of security when calling external APIs. Use appropriate authentication and authorization mechanisms. Avoid exposing sensitive data in function calls.
Token Limits: Function descriptions and parameters count towards your input token limit. If you're hitting token limits, consider limiting the number of functions or the length of the descriptions, break down complex tasks into smaller, more focused function sets.
Notes and limitations
Only a subset of the OpenAPI schema is supported.
Supported parameter types in Python are limited.
Automatic function calling is a Python SDK feature only.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-26 UTC.

Terms
Privacy

English
The new page has loaded..