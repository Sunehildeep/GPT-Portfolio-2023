export async function saveDetails(prompt: string) {
	try {
		const trackerUrl = process.env.NEXT_PUBLIC_TRACKER_URL || "";
		const trackerAuth = process.env.NEXT_PUBLIC_TRACKER_AUTH || "";

		if (!trackerUrl || !trackerAuth) {
			console.error("Tracker URL not found");
			return;
		}

		const res = await fetch(trackerUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: trackerAuth,
			},
			body: JSON.stringify({ prompt: prompt }),
		});

		if (!res.ok) {
			console.error("Failed to save details");
		}
	} catch (err) {
		console.error("Failed to save details", err);
	}
}
