<template>
	<div class="home mt-5 mb-5">
		<Judul @postQuote="postNewQuote" />
		<section class="quote-list mt-3" v-if="listQuote.length">
			<div class="container">
				<div class="row justify-content-center">
					<QuoteCard v-for="list of listQuote" :key="list._id" :title="list.quote" />
				</div>
			</div>
		</section>
		<Loading v-else />
	</div>
</template>

<script>
import Nprogress from "nprogress/nprogress.js";
import "nprogress/nprogress.css";
import ApiServices from "./utils/ApiService";

// Components
import Judul from "./components/Judul.vue";
import QuoteCard from "./components/QuoteCard.vue";
import swal from "sweetalert";

export default {
	name: "App",
	data: () => ({
		ms: "0",
		listQuote: []
	}),
	components: { Judul, QuoteCard },
	async mounted() {
		Nprogress.start();
		try {
			const data = await ApiServices.getQuote();
			this.listQuote = [...data];
		} catch (e) {
			swal("Error", e, "error");
		}

		Nprogress.done();
		console.clear();
	},
	methods: {
		async postNewQuote(title) {
			Nprogress.start();

			try {
				const data = await ApiServices.newQuote({ quote: title });
				this.listQuote = [...data];
			} catch ({ response }) {
				swal("Sorry", response.data, "error");
			}

			Nprogress.done();
			console.clear();
		}
	}
};
</script>

<style lang="scss">
#nprogress {
	.spinner-icon {
		display: none;
	}

	.bar {
		background: #fff !important;
	}
}
</style>
