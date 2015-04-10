module.exports = {
	'default': ['http-server'],
	'dev': ['wintersmith:local', 'copy:slides', 'compass'],
	'con': ['dev', 'watch:dev']
};