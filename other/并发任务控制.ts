function timeout(time: number): Promise<void> {
    return new Promise((res) => {
        setTimeout(res, time);
    });
}

type Task = () => Promise<void>;

interface TaskItem {
    resolve: (value?: void | PromiseLike<void>) => void;
    reject: (reason?: any) => void;
    task: Task;
}

class SuperTask {
    private parallelCount: number;
    private taskList: TaskItem[];
    private runningCount: number;

    constructor(parallelCount: number = 2) {
        this.parallelCount = parallelCount;
        this.taskList = [];
        this.runningCount = 0;
    }

    add(task: Task): Promise<void> {
        return new Promise((resolve, reject) => {
            this.taskList.push({ resolve, reject, task });
            this.run();
        });
    }

    private run(): void {
        while (this.runningCount < this.parallelCount && this.taskList.length) {
            const { task, resolve, reject } = this.taskList.shift()!;
            this.runningCount++;
            Promise.resolve(task()).then(() => resolve(), reject).finally(() => {
                this.runningCount--;
                this.run();
            });
        }
    }
}

const superTask = new SuperTask();

function addTask(time: number, name: number): void {
    superTask.add(() => timeout(time)).then(() => {
        console.log(`任务${name}完成`);
    });
}

addTask(10000, 1);
addTask(5000, 2);
addTask(3000, 3);
addTask(4000, 4);
addTask(5000, 5);
