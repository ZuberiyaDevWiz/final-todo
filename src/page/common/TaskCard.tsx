import { FC } from 'react';
import Button from './Button';

const TaskCard: FC = () => (
    <div className="h-fit w-[30vw] rounded-xl p-4 ring-1 ring-gray-200">
        <div>
            <h1 className=" font-semibold text-lg pb-2">Task Card</h1>
        </div>
        <div>
            <p className="line-clamp-4 text-[#707070]">
                LoremNostrud sit pariatur dolor dolor ullamco cillum. Duis aliquip culpa deserunt
                nulla aute deserunt. Excepteur consequat excepteur excepteur velit tempor ea do
                laboris dolor. LoremNostrud sit pariatur dolor dolor ullamco cillum. Duis aliquip
                culpa deserunt nulla aute deserunt.
            </p>
        </div>
        <hr className="my-4" />
        <Button text="Mark as completed" className="!pb-4" />
    </div>
);

export default TaskCard;
