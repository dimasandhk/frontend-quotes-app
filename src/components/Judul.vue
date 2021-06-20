<template>
	<section class="judul">
		<div class="container">
			<h3 class="text-center" v-once>Quotes App</h3>
			<div class="row justify-content-center">
				<div class="col-12 col-md-12 col-lg-8">
					<div class="input-group mt-3" v-if="!timerEnabled">
						<input
							type="text"
							class="form-control shadow-none"
							placeholder="Quote Title (Min 15 Char)"
							spellcheck="false"
							v-model="inputValue"
							@keyup="trigger"
						/>
						<div class="input-group-append">
							<button
								class="btn btn-dark btn-dark-not-disabled shadow-none"
								@click="valuePassed"
								:disabled="inputNotEmpty"
							>
								Add Quote
							</button>
						</div>
					</div>
					<DisabledInput :timer="passingTimer" v-else />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import swal from "sweetalert";
import DisabledInput from "./DisabledInput.vue";

export default {
	data: () => ({
		inputValue: "",
		timerCount: 15,
		timerEnabled: false
	}),
	computed: {
		inputNotEmpty() {
			return !this.inputValue || this.inputValue.length <= 15;
		},
		passingTimer() {
			return `Wait for ${this.timerCount}s`;
		}
	},
	watch: {
		timerEnabled(value) {
			if (value) {
				setTimeout(() => {
					this.timerCount--;
				}, 1000);
			}
		},
		timerCount: {
			handler(value) {
				if (value > 0 && this.timerEnabled) {
					setTimeout(() => {
						this.timerCount--;
					}, 1000);
				} else if (value <= 0) {
					this.timerCount = 10;
					this.timerEnabled = false;
				}
			},
			immediate: true
		}
	},
	methods: {
		valuePassed() {
			if (this.inputValue.length > 100)
				return swal("Sorry", "The Quote must be under 100 character", "error");

			this.$emit("postQuote", this.inputValue);

			this.inputValue = "";
			this.timerEnabled = true;
		},
		trigger(event) {
			if (this.inputValue.length < 15 && event.keyCode == 13) {
				this.inputValue = "";
				return swal("Sorry", "The Quote must be at least 15 character", "error");
			}

			event.keyCode == 13 && this.valuePassed();
		}
	},
	components: { DisabledInput }
};
</script>

<style lang="scss" scoped>
h3 {
	font-weight: 700;
	color: #fff;
}

.form-control {
	color: #333 !important;
	outline: none !important;
	border: none !important;
}

.btn-dark {
	&:not(.btn-dark-not-disabled) {
		cursor: not-allowed;
	}
	background-color: #2a2e37 !important;
}

.btn-dark-not-disabled {
	&:hover:not([disabled]) {
		background-color: darken(#2a2e37, 6%) !important;
	}
}
</style>

<style lang="scss">
.swal-modal {
	.swal-title,
	.swal-text {
		color: #fff;
	}

	.swal-button {
		&:hover {
			background-color: darken(#3d4451, 11%);
		}
		outline: none;
		border: none;
		box-shadow: none;
		background-color: darken(#3d4451, 7%);
	}

	background-color: #3d4451;
}
</style>
