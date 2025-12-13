<!DOCTYPE html>
<html>
<head>
    <title>Protein Tracker</title>
</head>
<body style="font-family: Arial; padding: 20px;">
    <h1 style="color: green;">Protein Tracker</h1>

    <p style="font-size: 18px; background: #eee; padding: 10px;"><b>Total: ${total}g</b></p>

    <p><g:link action="create" style="color: white; background: green; padding: 8px 16px; text-decoration: none;">Add Entry</g:link></p>

    <g:if test="${entries}">
        <table border="1" style="border-collapse: collapse; margin-top: 10px;">
            <tr style="background: green; color: white;">
                <th style="padding: 8px;">Grams</th>
                <th style="padding: 8px;">Logged At</th>
            </tr>
            <g:each in="${entries}" var="entry">
                <tr>
                    <td style="padding: 8px;">${entry.grams}g</td>
                    <td style="padding: 8px;"><g:formatDate format="dd.MM.yyyy HH:mm" date="${Date.from(entry.loggedAt.atZone(java.time.ZoneId.systemDefault()).toInstant())}"/></td>
                </tr>
            </g:each>
        </table>
    </g:if>
    <g:else>
        <p>No entries yet.</p>
    </g:else>
</body>
</html>
</html>

