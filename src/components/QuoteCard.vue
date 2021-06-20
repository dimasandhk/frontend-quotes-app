<template>
	<div class="col-6 col-md-4 col-lg-3 mt-3">
		<div class="quote-card h-100">
			<p class="text-center">{{ title }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String
	}
};
</script>

<style lang="scss" scoped>
.quote-card {
	p {
		font-weight: 700;
	}
	.badge-neutral {
		background-color: darken(#2a2e37, 6%);
	}
	padding: 15px;
	border-radius: 7px;
	background: #2a2e37;
}

.text-center {
	font-size: 14px;
}

@media only screen and (max-width: 768px) {
	.text-center {
		font-size: 12px;
	}
}
</style>
