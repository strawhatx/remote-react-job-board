import React from "react";

const JobsList = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const { error, jobs, total, size } = useJobsHook(page, search);

    return (
        <></>
    );
};

export default ForgotPasswordForm;