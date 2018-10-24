(defun can-i-drive(age)
	(if (>= age 16)
    (message "You can drive.")
    (message "You cannot drive.")))

(can-i-drive 15) ; You cannot drive.
(can-i-drive 17) ; You can drive.
