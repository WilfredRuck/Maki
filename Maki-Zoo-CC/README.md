# Maki Zoo Coding Challenge

## Getting up and running

1. This project uses ruby 2.4.1 and is configued to use rvm, but feel to use whichever version manager you prefer.
2. `git clone https://github.com/makifund/maki-zoo-coding-challenge && cd maki-zoo-coding-challenge`
3. `bundle`
4. `rake db:create && rake db:migrate`
5. `rails s`
6. load `http://localhost:3000`

_Note that setting up your local environment isn't a primary goal of this challenge, so feel free to reach out if you run into any issues._

## Completing the challenge

This challenge is designed to test your basic familiarity with Rails CRUD operations as well as knowledge of a few basic principles of React.

The problem space is trivially organized around the notion of a zoo, which we wish to add animals to. Animal types are identified by their `name`,
and we want to only allow one type of any animal into the zoo.

Following are the specific tasks we'd like you to undertake:

1. Add a validation to `app/models/animal.rb` to only allow animals with unique names to be created. Extra credit: incorporate case-insensitivity into the validation.
2. Adjust the logic in `app/controllers/animals_controller.rb` to send an error message is the validation fails and a success message if the validation passes and the animal is successfully created.
3. Adjust `AddAnimal.js.jsx`, `ErrorMessage.js.jsx` and `SuccessMessage.js.jsx` in `app/assets/javascripts/components` to acheive the following:
    - Render an error message to the screen via `ErrorMessage.js.jsx` if the AJAX call returns an error; otherwise render `null`.
    - Render a success message to the screen via `SuccessMessage.js.jsx` if the AJAX call returns an error; otherwise render `null`.
    - Fix the error currently being thrown on line 37 in the AJAX success callback when calling `this.setState({formSuccessMessage: data.message})`.

Once your changes are complete, please push the changes to a repo associated with your own GitHub account and share with the following GitHub user: `zambrose`.

One final note: it's OK if you can't complete the entire challenge as outlined above; we're more interested in learning about how you approached solving the problems. We'll review your implementation together when we meet in person.

