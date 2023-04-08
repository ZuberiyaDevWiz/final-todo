import { FC } from 'react';

const TaskCard: FC = () => (
    <div className="h-[50%] w-[30%] rounded-xl p-4 ring-1">
        <div>
            <h1 className=" font-semibold text-lg pb-4">Task Card</h1>
        </div>
        <div>
            <p className="line-clamp-4 text-[#707070]">
                LoremNostrud sit pariatur dolor dolor ullamco cillum. Duis aliquip culpa deserunt
                nulla aute deserunt. Excepteur consequat excepteur excepteur velit tempor ea do
                laboris dolor. LoremNostrud sit pariatur dolor dolor ullamco cillum. Duis aliquip
                culpa deserunt nulla aute deserunt.
            </p>
        </div>
        <hr className="my-6" />
    </div>
);

export default TaskCard;
