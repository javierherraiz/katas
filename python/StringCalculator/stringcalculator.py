import re
class stringCalculator:
	default_delimiter_pattern = re.compile('\n|,')
	custom_delimiter = re.compile('\/\/.+\n')
	several_delimiters = re.compile('\/\/\[[^\[\]]\]+\n')
	def __init__(self,numbers):
		self.numbers = numbers
		
	def add(self):
		number_list = []
		sum = 0
		if self.numbers == None or self.numbers == '':
			return 0
		if re.match(self.default_delimiter_pattern,self.numbers):
			print "it matches"
			number_list = self.numbers.split(self.default_delimiter_pattern)
			for x in number_list:
				print x
				sum += x
		return sum

		
def main():
	sc = stringCalculator('')
	print "Result for an empty given string: " + str(sc.add())
	sc2 = stringCalculator('1,2\n6')
	print "Result with default deimiter: " + str(sc2.add())


if __name__ == '__main__':
	main()


