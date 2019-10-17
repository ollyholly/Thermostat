require 'sinatra'
require 'sinatra/activerecord'
require 'json'
require './lib/thermostat'

set :database_file, 'config/database.yml'

class ThermostatApp < Sinatra::Base
  register Sinatra::ActiveRecordExtension

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    Thermostat.find(1).temperature.to_json
  end

  get '/psm' do
    headers 'Access-Control-Allow-Origin' => '*'
    Thermostat.find(1).psm.to_json
  end

  post '/psm' do
    headers 'Access-Control-Allow-Origin' => '*'
    p params[:psm]
    Thermostat.find(1).update_attribute(:psm, params[:psm])
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    Thermostat.find(1).update_attribute(:temperature, params[:temperature])
  end

  run! if app_file == $0
end
