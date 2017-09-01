class Animal < ApplicationRecord
  # TODO: create validation to only allow one animal of the same name.
  validates_uniqueness_of :name, :case_sensitive => false
end
