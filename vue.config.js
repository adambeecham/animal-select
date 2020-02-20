module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "@/assets/styles/reset.scss";
					@import "@/assets/styles/mixins.scss";
					@import "@/assets/styles/fonts.scss";
				`
			}
		}
	}
};