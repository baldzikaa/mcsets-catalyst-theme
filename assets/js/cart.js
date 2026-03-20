document.addEventListener('alpine:init', () => {
    Alpine.store('upgrades', {
        offers: [],
        loading: false,
        dismissedOffers: JSON.parse(localStorage.getItem('vivid_dismissed_upgrades') || '[]'),
        async fetchOffers(username) {
            if (this.loading || !username) return;
            this.loading = true;
            try {
                const res = await fetch('/api/auth/upgrade-offers', { credentials: 'include' });
                if (res.ok) { const data = await res.json(); this.offers = data.offers || []; }
            } catch(e) {}
            this.loading = false;
        },
        dismissOffer(packageId) {
            this.dismissedOffers.push(packageId);
            localStorage.setItem('vivid_dismissed_upgrades', JSON.stringify(this.dismissedOffers));
        },
        formatPrice(amount) {
            return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(amount);
        }
    });
});