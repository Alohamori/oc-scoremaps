require 'json'
require 'sqlite3'

def build table, column, group = 'group by match'
  <<-SQL
  with pairs as (select max(#{column}) hi, min(#{column}) lo, match from #{table} #{group})
  select hi, lo, count(), min(match) from pairs group by hi, lo
  SQL
end

data = []
SQLite3::Database.new 'only-connect.db' do |db|
  1.upto 4 do
    data << db.execute(build "round_scores where round = #{_1}", 'score')
  end

  [2, 3].each do
    data << db.execute(build "round_scores where round = #{_1}", 'cum_score')
  end

  data << db.execute(build 'match_scores', 'score')
  data << db.execute(build 'play_by_play where score', 'score, score - margin', '')
end

puts 'const data = ['
data.each do |r|
  puts ' ['
  r.each { puts "  [#{_1 * ','}]," }
  puts ' ],'
end
puts '];'
