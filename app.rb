require 'sinatra'
require 'sinatra/activerecord'
require 'json'

set :database_file, 'config/database.yml'

class Thermostat < Sinatra::Base
  register Sinatra::ActiveRecordExtension

  get '/get-temp' do
    headers 'Access-Control-Allow-Origin' => '*'
    25.to_json
    # @temperature = Thermostat.find(1).temperature
    # @temperature.to_json
  end

  # post "/save-temp" do
  #   headers 'Access-Control-Allow-Origin' => '*'
  #   p params[:temperature]
  #   save_temp(temperature: params[:temperature])

  # end

  # def save_temp(temperature:)
  #   connection = PG.connect(dbname: "thermostat")
  #   connection.exec("TRUNCATE TABLE state;")
  #   connection.exec("INSERT INTO state (temperature) VALUES(#{temperature});")
  # end

  # def get_temperature
  #   connection = PG.connect(dbname: "thermostat")
  #   temp = connection.exec("SELECT temperature FROM state;").first
  #   temp["temperature"].to_i
  # end

  run! if app_file == $0
end

