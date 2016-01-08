# BLixir
_TLDR: This is a project intended to help me learn Elixir. Use at your own
peril._  
  
BLixir _will_ be a blogging platform written in [various technologies](http://www.github.com/phereford/b_lixir#technologies).
This project will run in production for a variety of blogs but will mainly
be replacing [p.hereford.io](http://p.hereford.io). The goal of this project is 
mainly to allow me to become more proficient at Elixir. 

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: http://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

## Dependencies
To use this software, you need `Postgres`, `Erlang`, `Elixir`, and `Phoenix`
installed on
your system.  
via Homebrew:  
`brew install elixir postgres`  
  
via mix:
`mix archive.install https://github.com/phoenixframework/phoenix/releases/download/v1.1.1/phoenix_new-1.1.1.ez`

## Running locally
```
git clone git@github.com:phereford/b_lixir.git
mix deps.get
cd b_lixir
ecto.create
ecto.migrate
mix phoenix.server
```

## Technologies
We will be utilizing various languages and frameworks:  
**Languages:**  
- Elixir (backend)  
- Javascript (ES6)  
- HTML5  
- CSS  
  
**Frameworks:**  
- Phoenix (webserver)  
- React  
- Redux  
- Neat  
- Webpack  

## Browser Support
- IE9+  
- Chrome  
- Firefox  
- Safari  

## Contributing
If you would like to contribute, please feel free to open Pull Requests. PRs
that do not have tests will more than likely just be closed. I like tests and
as this is a learning project feel the need to get better about testing and 
learn the ins and outs of ExUnit and our JS testing library of choice (undecided).

## Code Style 
[Elixir](https://github.com/rrrene/elixir-style-guide)  
[Javascript](javascript-style.md)  
[CSS](css-style.md)  

## TODO
- [] Code Style documents using credo and eslint
  - [] CSS
  - [] Elixir
  - [] Javascript
  - [] HTML
- [] Setup webpack and all the various React / npm modules needed.
- [] Responsive Grid (16 columns for desktop, 8 columns for tablet, 4 for mobile)  
- [] Build out domain for a blog:
  - [] Consumption
    - [] Posts
    - [] Comments
    - [] Users
    - [] Tagging (Categorical representation of content)
    - [] Slugging
  - [] Admin Interface
    - [] Posts creation and management
    - [] Comment Moderation
    - [] User management
    - [] Websockets to determine which documents are being edited
    - [] Websockets for collaboration on in progress posts
    - [] PostMessage for live preview of document creation
    - [] Versioning of documents?
    - [] Workflows of document creation to publishing.
- [] Authentication (using Ueberauth)
  - [] Twitter
  - [] Facebook
  - [] Google+
- [] Authorization
  - [] Registrant -> Ability to comment
  - [] Admin -> Ability to create content and comment.
