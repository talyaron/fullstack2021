const remembersHTML: HTMLElement = document.querySelector('.remembers')

const remembers = {
	getData: async function () {
		try {
			const { data } = await axios.get('/getTasks')
			console.log(data)

			if (Array.isArray(data)) return data;
			throw new Error("data is not an array");

		} catch (error) {
			console.error(error);
			return [];
		}
	},

	renderTasks: async function () {
		let html = "";

		const tasks = await this.getData();

		if (tasks) {
			tasks.map(task => {
				html += `
				<div class="remembers__task">
					<h2>${task.title}</h2>
        		</div>
				`
			})
			remembersHTML.innerHTML = html
		}
	},

	renderERPTasks: async function () {
		let html = "";

		const tasks = await this.getData();

		if (tasks) {
			tasks.map(task => {
				html += `
				<form class="remembers__task" id="${task.id}" >
					<input type="text" value="${task.title}" name="title">
					<button onclick="deleteTask(${task.id})">Delete task</button>
					
        		</form>
				`
			})
			remembersHTML.innerHTML = html
		}
	},
}

async function deleteTask(id) {
	console.log(id)

	const data = await axios.delete('/deleteTask', { data: { id } })
	const { ok, tasks } = data

	console.log(tasks)
	console.log(ok)
}

