function timeout(time) {
    return new Promise((res) => {
        setTimeout(res, time);
    })
}


class SuperTask {
    constructor(parallelCount = 2) {
        this.parallelCount = parallelCount;
        this.taskList = [];
        this.runningCount = 0;
    }

    add(task) {
        return new Promise ((resolve,reject) => {
            this.taskList.push({
                resolve,
                reject,
                task
            });
            this._run();
        })
    }


    _run() {
        while(this.runningCount < this.parallelCount && this.taskList.length) {
            const {task,resolve,reject} = this.taskList.shift()
            this.runningCount++;
            Promise.resolve(task()).then(resolve,reject).finally(() => {
                this.runningCount--;
                this._run()
            })
        }
    }

}


const superTask = new SuperTask()
function addTask(time,name) {
    superTask.add(() => timeout(time)).then(() => {
        console.log(`任务${name}完成`)
    })
}


addTask(10000,1);
addTask(5000,2);
addTask(3000,3);
addTask(4000,4);
addTask(5000,5);