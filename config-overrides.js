module.exports = function override(config, env) {
	//do stuff with the webpack config...
	config.externals = {
		'BMap': 'BMap'
	}
	return config;
}