require 'sinatra'
require 'sinatra/activerecord'
require 'json'

set :database_file, 'config/database.yml'

class Thermostat < Sinatra::Base
  register Sinatra::ActiveRecordExtension

  get '/get-temp' do
    
  end

  post '/post-temp' do
    
  end

  run! if app_file == $0
end

