<!DOCTYPE html>
<html>
<head>
    <title>Add Protein</title>
</head>
<body style="font-family: Arial; padding: 20px;">
    <h1 style="color: green;">Add Protein</h1>

    <g:form action="save" method="POST">
        <p>
            <label><b>Grams:</b></label><br>
            <input type="number" name="grams" min="1" required style="padding: 8px; font-size: 16px;">
        </p>
        <p>
            <button type="submit" style="background: green; color: white; padding: 10px 20px; border: none; font-size: 16px;">Add</button>
        </p>
    </g:form>

    <p><g:link action="list" style="color: green;">Back to List</g:link></p>
</body>
</html>

